import axios from "axios"
import { useEffect, useState } from "react"

type Props = {
    categoryId : string
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
                <div key={index} className="flex flex-col p-4 bg-[#FFFFFF] rounded-lg">
                    <img src={food.image} alt="food" className="w-[325px] h-[170px] rounded-lg"/>
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