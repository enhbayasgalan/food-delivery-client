"use client";

import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { OrderHistory } from "./OrderHistory";
import axios from "axios";
export type order = {
  foodOrderItems: item[];
  status: string;
  createdAt: Date;
  user: User;
  totalPrice: number;
};

export type item = {
  food: food;
  quantity: number;
};

type food = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  _id: string;
};
export type User = {
  email: string;
  address: string;
};

export const OrderDetail = () => {
  const [orderItems, setortderItmes] = useState<order[]>([]);
  const getItems = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `https://food-delivery-service-0wy6.onrender.com/order`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response);
      setortderItmes(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getItems();
  }, []);
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <Card className="p-4 w-full rounded-xl flex flex-col gap-5">
        <h1 className="font-semibold text-xl">Order History</h1>

        {orderItems.length === 0 ? (
          <div className="py-8 px-12 w-full flex flex-col items-center gap-1 bg-[#F4F4F5] rounded-md">
            <Logo />
            <div className="text-lg font-semibold">Your cart is empty</div>
            <div className="text-[#71717A] text-center text-sm">
              🍕 &quot;You haven&apos;t placed any orders yet. Start exploring
              our menu and satisfy your cravings!&quot;
            </div>
          </div>
        ) : (
          orderItems.map((order, index) => (
            <OrderHistory key={index} order={order} />
          ))
        )}
      </Card>
    </div>
  );
};
