"use client";

import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Logo } from "../_components/Logo";
import { FoodCart } from "../_components/FoodCard";
import { Button } from "@/components/ui/button";
import axios from "axios";

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
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCartItmes(JSON.parse(cart));
    }
  };
  useEffect(() => {
    getItems();
  }, []);
  const totalprice = cartitems.reduce(
    (sum, item) => sum + Number(item.food.price) * item.quantity,
    0
  );

  const addorder = async () => {
    const token = localStorage.getItem("token");
    const items = localStorage.getItem("cart");
    if (items) {
      const fooditems: Array<CartItems> = JSON.parse(items);

      const item = fooditems.flatMap((fooditem) => ({
        food: fooditem.food._id,
        quantity: fooditem.quantity,
      }));
      console.log(item);

      try {
        const res = await axios.post(
          `http://localhost:5000/order`,
          { totalPrice: totalprice, foodOrderItems: item },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }finally{
        localStorage.setItem('cart', JSON.stringify([]))
        setCartItmes([])
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-6">
      <Card className="p-4 w-full rounded-xl flex flex-col gap-5">
        <h1 className="font-semibold text-xl">My Cart</h1>

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
            <FoodCart
              setCartItems={setCartItmes}
              key={index}
              food={item.food}
              getCartItems={getItems}
              quantity={item.quantity}
            />
          ))
        )}

        <Button className="px-[8px] py-[32px] justify-center items-center gap-[8px] h-[44px] bg-[#EF4444] rounded-full">
          add foods
        </Button>
      </Card>
      <div className="p-4 bg-[#FFFF] rounded-xl flex flex-col gap-5">
        <div className="text-xl font-semibold text-black">Payment info</div>
        <div className="text-gray-500 text-sm ">
          <div className="flex justify-between">
            <p className="font-bold text-base">Items</p>
            <p className="font-bold text-base">{totalprice}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-bold text-base">Shipping</p>
            <p className="font-bold text-base">0.99</p>
          </div>
        </div>
        <div className="flex justify-between text-gray-500 mt-[10px]">
          <p className="font-bold text-base">Total</p>
          <p className="font-bold text-base">{totalprice + 0.99}</p>
        </div>
        <Button
          className="py-2 rounded-full bg-[#EF4444] text-[#FFFF] text-sm w-full"
          onClick={addorder}
        >
          check out
        </Button>
      </div>
    </div>
  );
};
