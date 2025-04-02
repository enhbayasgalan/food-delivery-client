"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import FoodCont from "../_components/FoodCont";
import { useCategory } from "@/provider/CategoryProvider";
import { FoodProvider } from "@/provider/FoodProvider";
// import { useRouter, usePathname } from "next/navigation";
// import { useQueryState, parseAsString } from "nuqs";

export const Category = () => {
  const { categories } = useCategory();

  // const router = useRouter();
  // const pathname = usePathname();

  // const [categoryId, setCategory] = useQueryState("categoryId", parseAsString);

  // const handleCategoryFoods = (_id: string | null) => {
  //   if (pathname === "/") {
  //     router.push(`/category?categoryId=${_id}`);
  //   } else if (pathname === "/category") {
  //     setCategory(_id);
  //   }
  // };
  // const filterCategories =
  //   categoryId && categoryId !== ""
  //     ? categories.filter((category) => category._id === categoryId)
  //     : categories;

  return (
    <div className="flex w-[1440px] px-[32px] py-[48px] flex-col gap-[36px]">
      <p className="text-2xl font-semibold text-white">Categories</p>
      <Carousel>
        <CarouselContent className="gap-3 w-[92px] h-[30px]">
          {categories
            ?.filter((category) => category.food_count !== 0)
            .map((category, index) => (
              <CarouselItem
                // onClick={() => handleCategoryFoods(category._id)}
                className="bg-[#FFFF] gap-[8px] py-3 py-1 text-black rounded-full "
                key={index}
              >
                {category.categoryName}
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
      {categories
        .filter((categoty) => categoty.food_count !== 0)
        .map((category, index) => (
          <FoodProvider categoryId={category._id} key={index}>
            <div key={index} className="flex flex-col">
              <p key={index} className="font-semibold text-3xl text-white ">
                {category.categoryName}
              </p>

              <FoodCont />
            </div>
          </FoodProvider>
        ))}
    </div>
  );
};
