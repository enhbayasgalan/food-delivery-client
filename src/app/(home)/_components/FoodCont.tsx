/* eslint-disable @next/next/no-img-element */
"use clien";
import { useFood } from "@/provider/FoodProvider";
import { FoodDetail } from "./FoodDetail";

const FoodCont = () => {
  const { foods } = useFood();
  console.log(foods);

  return (
    <div className="flex gap-6 flex-wrap">
      {foods.map((food, index) => (
        <div
          key={index}
          className="flex flex-col p-4 bg-[#FFFFFF] rounded-lg mt-[15px]"
        >
          <div>
            <img
              src={food.image}
              alt="food"
              className="w-[325px] h-[170px] rounded-lg"
            />
            <FoodDetail food={food} />
          </div>
          <div className="flex justify-between">
            <p className="text-[#EF4444] font-semibold text-xl">
              {food.foodName}
            </p>
            <p className="font-semibold text-xl">{food.price}$</p>
          </div>
          <div className="font-semibold text-sm">{food.ingredients}</div>
        </div>
      ))}
    </div>
  );
};
export default FoodCont;
