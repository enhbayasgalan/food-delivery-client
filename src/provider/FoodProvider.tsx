// import { strict } from "assert";
import axios from "axios";
// import { create } from "domain";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type Food = {
    food_name: string;
    price: number;
    food_description: string;
    food_image: string;
    category: string;
    _id: string;
}
// type Response = {
//     categoryName : string,
//     _id : string
// }

type FoodProvider = {
    food: Food[];
    getFoods : () => Promise<void>
}

const FoodContext = createContext<FoodProvider | null>(null)

export const FoodProvider = ({children} : {children : ReactNode}) => {
    const [food, setFood] = useState<Food[]>([])

    const getFoods = async (): Promise<void> => {
        try {
            const response = await axios.get("https://food-delivery-service-0wy6.onrender.com/foods");
            console.log("Category fetched:", response.data); 
            setFood(response.data)
        } catch (error) {
            console.error("Error fetching category:", error);
        }
    };
    useEffect(()=> {
        getFoods()
    }, [])

    return(
        <FoodContext.Provider value={{food, getFoods }}>
            {children}
        </FoodContext.Provider>
    )
}
export const useFood = () => {
    const context = useContext(FoodContext)
    if (!context) {
        throw new Error("usefoods")
    }
    return context
} 