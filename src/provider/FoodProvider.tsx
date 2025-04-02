"use client";

import { QueryObserverResult, useQuery } from "@tanstack/react-query";
// import { strict } from "assert";
import axios from "axios";
// import { create } from "domain";
import { createContext, ReactNode, useContext } from "react";
type Food = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  _id: string | null;
};
// type Response = {
//     categoryName : string,
//     _id : string
// }

type FoodProvider = {
  foods: Food[];
  refetchFood: () => Promise<QueryObserverResult<Food[], Error>>;
};

const FoodContext = createContext<FoodProvider | null>(null);

export const FoodProvider = ({
  children,
  categoryId,
}: {
  children: ReactNode;
  categoryId: string;
}) => {
  const getFoods = async (categoryId: string) => {
    try {
      const response = await axios.get(
        `https://food-delivery-service-0wy6.onrender.com/food/${categoryId}`
      );
      console.log("Category fetched:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching category:", error);
      return [];
    }
  };

  const { data: foods = [], refetch: refetchFood } = useQuery({
    queryKey: ["foods", categoryId],
    queryFn: () => getFoods(categoryId),
    enabled: !!categoryId,
  });

  return (
    <FoodContext.Provider value={{ foods, refetchFood }}>
      {children}
    </FoodContext.Provider>
  );
};
export const useFood = () => {
  const context = useContext(FoodContext);
  if (!context) {
    throw new Error("usefoods");
  }
  return context;
};
