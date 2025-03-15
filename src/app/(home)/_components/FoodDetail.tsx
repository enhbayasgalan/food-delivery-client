import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
type Props = {
  food: food;
  getCartItems: Function;
};
type food = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
};

export const FoodDetail = ({ food, getCartItems }: Props) => {
  const [foodItemsquantity, setQuantity] = useState(1);

  const postQuantity = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/orderItems`);
      getCartItems();
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    postQuantity();
  }, []);
  const minus = () => {
    if (foodItemsquantity<=1) return
    setQuantity(foodItemsquantity-1) 
  }
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
            <Button
              className="p-1 rounded-full"
              onClick={minus}
            >
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
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
// max-w-[778px] max-h-[364px]
