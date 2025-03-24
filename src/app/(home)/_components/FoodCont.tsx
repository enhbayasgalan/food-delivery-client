/* eslint-disable @next/next/no-img-element */
import axios from "axios"
import { useEffect, useState } from "react"
import { FoodDetail } from "./FoodDetail"


type Props = {
    categoryId : string | null
}
type Food = {
    foodName: string;
    price: number;
    image: string;
    ingredients: string;
    category: string;
    _id : string
}


const FoodCont = ({categoryId}:Props) => {
    const [foods, setFoods ]= useState<Food[]>([])
    const getFoods = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/food/${categoryId}`)
            console.log(res);
            setFoods(res.data)
            
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
        getFoods()
    },[])
    return(
        <div className="flex gap-6 flex-wrap">
            {foods.map((food:Food, index)=>(
                <div key={index} className="flex flex-col p-4 bg-[#FFFFFF] rounded-lg mt-[15px]">
                    <div>
                      <img src={food.image} alt="food" className="w-[325px] h-[170px] rounded-lg"/>
                      <FoodDetail food={food} getCartItems={getFoods}/>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-[#EF4444]">{food.foodName}</p>
                        <p>{food.price}$</p>
                    </div>
                    <div>
                        {food.ingredients}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default FoodCont