"use client";

import { Card } from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";
import { Logo } from "../_components/Logo";
import { FoodDetail } from "../_components/FoodDetail";
import { log } from "console";
import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";

type CartItems = {
  food: food;
  quantity: number;
  _id: string;
};
type food = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  category: string;
  _id: string;
};

export const CartDetail = () => {
  const [cartitems, setCartItmes] = useState<CartItems[]>([]);
  const getItems = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/food`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getItems();
  }, []);
  const totalprice = cartitems.reduce((sum, items) => sum + Number(items.food.price) * items.quantity, 0)
  return (
    // <div>
    // <Card className="w-[360px] h-full flex flex-col gap-6 lg:gap-3 ">
    // <h1 className="font-bold text-xl px-2 py-3">My cart</h1>
    //     {foods.map((food: food, index) => (
    //         <div key={index} className="flex h-[120px] gap-[10px] flex-col">
    //             <img src={food.image} alt="foodimage" className="w-[124px] h-[120px] rounded-xl"/>
    //         </div>
    //     ))}
    // </Card>
    // </div>
    <div className="w-[360px] h-full flex flex-col gap-6">
      <Card className="p-4 w-[360px] rounded-xl flex flex-col gap-5">
        <h1 className="font-semibold text-lg ">My Cart</h1>

        {cartitems.length === 0 ? (
          <div className="py-8 px-12 w-full flex flex-col items-center gap-1 bg-[#F4F4F5] rounded-md">
            <Logo />
            <div className="text-lg font-semibold">Your cart is empty</div>
            <div className="text-[#71717A] text-center text-sm">
              Hungry? 🍔 Add some delicious dishes to your cart and satisfy your
              cravings!
            </div>
          </div>
        ) : (
          cartitems.map((item, index) => (
            <FoodDetail key={index} food={item.food} getCartItems={getItems} />
          ))
        )}

        <Button className="px-[8px] py-[32px] justify-center items-center gap-[8px] h-[44px] bg-[#EF4444] rounded-full">
            add foods
        </Button>
      </Card>
      <div className="p-4 h-[360px] bg-[#FFFFFF] rounded-xl flex flex-col gap-5 ">
        <h1 className="text-lg font-semibold text-md">Payment info</h1>
        <div className="text-[#71717A] text-sm">
          <div className="flex gap-9">
            <p className="font-semibold text-lg text-black">Items</p>
            <p className="font-semibold text-lg text-black">{totalprice}$</p>
          </div>
          <div className="flex gap-9">
            <p className="font-semibold text-lg text-black">Shipping</p>
            <p className="font-semibold text-lg text-black">0.99$</p>
          </div>
        </div>
        <div className="flex gap-9 text-gray">
          <p className="font-semibold text-lg text-black">Total</p>
          <p className="font-semibold text-lg text-black">{totalprice + 0.99}$</p>
        </div>
           <Button
             className="w-[330px] py-2 rounded-full bg-[#EF4444] text-white text-sm "
           >
             Check out
           </Button>
      </div>
    </div>
  );
};
