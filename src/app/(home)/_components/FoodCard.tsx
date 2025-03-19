import { Button } from "@/components/ui/button";
import axios from "axios";
import { log } from "console";
import { Divide, Minus, Plus, X } from "lucide-react";
import { useState } from "react";
type Props = {
  food: food;
  quantity: number;
  getCartItems(): Promise<void>;
};
type food = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  category: string;
  _id: string;
};

export const FoodCart = ({ food, quantity, getCartItems }: Props) => {
  const [foodquantity, setFoodQuantity] = useState(quantity);
  const minus = () => {
    if (foodquantity <= 1) return;
    setFoodQuantity(foodquantity - 1);
  };
  const pinus = () => {
    setFoodQuantity((prev) => prev + 1);
  };
  const deleteItem = async () => {
    try {
      const res = await axios.delete(`http://localhost:5000/orderItems`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const price = (foodquantity * (food?.price || 0)).toFixed(2);
  return (
    <div>
    <div className="w-full h-[120px] flex gap-[10px]">
      <div className="w-[124px] h-full relative rounded-md overflow-hidden">
        <img
          className="w-[124px] h-[120px] absolute"
          src={food.image}
          alt="foodname"
        />
      </div>
      <div className="flex w-[70%] flex-col gap-6">
        <div className="w-full flex h-[60%] justify-between">
          <div>
            <h1 className="font-bold text-base text-[#EF4444]">
              {food.foodName}
            </h1>
            <p>{food.ingredients}</p>
          </div>
          <button
            onClick={deleteItem}
            className="w-9 h-9 items-center flex justify-center border-[#EF4444] border rounded-full"
          >
            <X stroke="#EF4444" />
          </button>
        </div>
        <div className="justify-between flex w-full">
          <div className="flex items-center gap-2">
            <button
              onClick={minus}
              className={`p-1 rounded-full ${
                foodquantity <= 1
                  ? "text-gray-300 cursor-not-allowed "
                  : "hover:bg-gray-100"
              }`}
              disabled={foodquantity <= 1}
            >
              <Minus />
            </button>
            <div className="mx-2 min-w-6 text-center">{foodquantity}</div>
            <button
              onClick={pinus}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <Plus />
            </button>
          </div>
          <div className="font-bold text-base ">${price}</div>
        </div>
      </div>
    </div>
    <div className="w-[439px] h-[1px] bg-gray-400 mt-[25px]"></div>
    </div>
  );
};