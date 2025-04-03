/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
type Props = {
  food: food;
};
type food = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  _id: string | null;
};

export const FoodDetail = ({ food }: Props) => {
  const [foodItemsquantity, setQuantity] = useState(1);

  const postQuantity = async () => {
    const cartItems = localStorage.getItem("cart");
    if (cartItems) {
      const cart = JSON.parse(cartItems);
      cart.push({ food: food, quantity: foodItemsquantity });
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([{ food: food, quantity: foodItemsquantity }])
      );
    }

  };
  const notify = () => toast("Success food cart");
  const minus = () => {
    if (foodItemsquantity <= 1) return;
    setQuantity(foodItemsquantity - 1);
  };
  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="flex w-[44px] h-[44px] px-[8px] py-[16px] justify-center items-center gap-[8px]"
      >
        <Button variant="outline" className="rounded-full">
          <Plus stroke="#EF4444" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[778px] max-h-[364px]">
        <img src={food.image} className="w-[377px] h-[20px] px-2 " />
        <DialogHeader>
          <DialogTitle className="flex flex-col justify-between ">
            <p className="font-semibold text-3xl text-[#EF4444]">
              {food.foodName}
            </p>
            <div className="mt-[10px]">{food.ingredients}</div>
          </DialogTitle>
          <div>
            <p className="font-normal text-base mt-[50px]">Total Price</p>
            <p className="font-semibold text-2xl">
              {food.price * foodItemsquantity}$
            </p>
          </div>
        </DialogHeader>
        <div className="justify-between flex w-full">
          <div className="flex items-center gap-2">
            <Button className="p-1 rounded-full" onClick={minus}>
              <Minus size={20} />
            </Button>
            <Button
              className="p-1 rounded-full"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              <Plus size={20} />
            </Button>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={postQuantity} onClickCapture={notify}>
            Add to cart
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
