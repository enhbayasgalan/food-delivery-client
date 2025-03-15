import { Card } from "@/components/ui/card"
import axios from "axios"
import { useState } from "react"
import { Logo } from "../_components/Logo"
import { FoodDetail } from "../_components/FoodDetail"
import { log } from "console"

type CartItems = {
    food : food,
    quantity : number,
    _id : string
}
type food = {
    foodName: string;
    price: number;
    image: string;
    ingredients: string;
    category: string;
    _id : string
}

export const CartDetail = () => {
    // const [cartItems, setCartItems] = useState<CartItems[]>([])
    // const getCartItems = async () => {
    //     try {
    //         const res = await axios.get(`http://localhost:5000/orderItems`)
    //         console.log(res);
    //         console.log(loading);
    //         setLoading(false)
            
    //     } catch (error) {
    //         console.error(error);
    //         setLoading(false)
    //     }
    // }
    // useEffect(() => {
    //     getCartItems()
    // }, [])
    return(
        <Card className="w-[355px] flex flex-col gap-6">
            <h1 className="font-bold text-xl px-2 py-3">My cart</h1>
        </Card>
    )
}