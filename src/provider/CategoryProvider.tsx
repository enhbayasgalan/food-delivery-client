"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, ReactNode, useContext } from "react";

type Response = {
  categoryName: string;
  _id: string;
  food_count: number;
};

type CategoryContextType = {
  categories: Response[];
  refetchCategory: () => void;
};

const CategoryContext = createContext<CategoryContextType | null>(null);

const getCategory = async (): Promise<Response[]> => {
  try {
    const response = await axios.get(
      "https://food-delivery-service-0wy6.onrender.com/category"
    );
    console.log("Category fetched:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching category:", error);
    throw new Error("Failed to fetch category");
  }
};

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const { data: categories = [], refetch: refetchCategory } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategory,
  });

  return (
    <CategoryContext.Provider value={{ categories, refetchCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};
export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be in CategoryProvider");
  }
  return context;
};
