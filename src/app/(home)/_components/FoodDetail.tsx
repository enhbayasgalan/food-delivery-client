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
  _id : string
};

export const FoodDetail = ({ food, getCartItems }: Props) => {
  const [foodItemsquantity, setQuantity] = useState(1);

  const postQuantity = async () => {

    const cartItems = localStorage.getItem('cart')
    if (cartItems) {
      const cart =  JSON.parse(cartItems)
      cart.push({food:food, quantity:foodItemsquantity})
      localStorage.setItem("cart", JSON.stringify(cart))
    }else{
      localStorage.setItem("cart", JSON.stringify([{food : food, quantity:foodItemsquantity}]))
    }

    // try {
  
    //   const res = await axios.post(`http://localhost:5000/orderItems/${food._id}`);
    //   getCartItems();
    //   console.log(res);
    // } catch (error) {
    //   console.error(error);
    // }
  };
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
        <img src={food.image} className="w-[377px] h-[20px] px-2 "/>
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
          <Button type="submit" onClick={postQuantity}>Add to cart</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};