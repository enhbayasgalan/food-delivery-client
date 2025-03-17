"use client"

import axios from "axios";
import { Soup, Timer } from "lucide-react";
import { useEffect, useState } from "react"
import { Map } from "lucide-react";
type Props = {
    order : order
}
type order = {
    orderItem : item[],
    status : string,
    createdAt : Date,
    user: string,
    totalPrice : number,
}
type item ={
    food: food 
    quantity : number
}
type food = {
    foodName: string;
    price: number;
    image: string;
    ingredients: string;
    _id : string
}
export const OrderHistory = ({order} : Props) => {
    const [orderaddress, setOrderAddress] = useState("");
    const getOrderAddress = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/user`)
            console.log(res);
            
        } catch (error) {
            console.log(error);
            
        }
    } 
    useEffect(() => {
        getOrderAddress()
    }, [])
    return(
        <div className="w-[360px] h-fit flex flex-col p-3 gap-3 border border-dashed">
            <div className="w-[360px] flex justify-between">
                <p>${order.totalPrice}</p>
                <div>{order.status}</div>
            </div>
            <div className="flex flex-col text-[#09090B80]">
                {order.orderItem.map((item: item, index) => (
                    <div key={index} className="flex w-full flex-col">
                        <div className="flex justify-between">
                            <div className="flex gap-2 items-center">
                                <Soup/>
                                <p>{item.food.foodName}</p>
                            </div>
                            <div>x{item.quantity}</div>
                        </div>
                    </div>
                ))}
                <div className="w-full flex items-center gap-2">
                    <Timer stroke="#09090B80"/>
                    <p>{order.createdAt.toString().split("Q")[0]}</p>
                </div>
                <div className="w-full flex items-center gap-2">
                    <Map stroke="#09090B80"/>
                    <p>{orderaddress}</p>
                </div>
            </div>
        </div>
    ) 
}