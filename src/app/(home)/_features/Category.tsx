"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import FoodCont from "../_components/FoodCont";
import { useCategory } from "@/provider/CategoryProvider";



export const Category = () => {
  const { categories } = useCategory();
  return (
    <div className="flex w-[1440px] px-[32px] py-[48px] flex-col gap-[36px]">
      <p className="text-2xl font-semibold text-white">Categories</p>
      <Carousel>
        <CarouselContent className="gap-3 w-[92px] h-[30px]">
          {categories?.map((category, index) => (
            <CarouselItem
              className="bg-[#FFFF] gap-[8px] py-3 py-1 text-black rounded-full "
              key={index}
            >
              {category.categoryName}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {categories.map((category, index) => (
        <div key={index} className="flex flex-col">
          <p key={index} className="font-semibold text-3xl text-white ">
            {category.categoryName}
          </p>
          <FoodCont categoryId={category._id} />
        </div>
      ))}
    </div>
  );
};
