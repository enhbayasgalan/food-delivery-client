import { Card } from "@/components/ui/card"
import axios from "axios"
import { log } from "console"
import { useServerInsertedHTML } from "next/navigation"
import { useEffect, useState } from "react"
import { Logo } from "./Logo"

export const OrderDetail = () => {
    const [order, setOrder] = useState([])
    const getOrder = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/order`)
            console.log(res);
            
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(() => {
        getOrder()
    }, [])
    return(
        <Card className="w-[355px]">
            <div className="p-4 w-[360px] rounded-xl h-full flex flex-col gap-5">
                <h1 className="font-semibold text-xl">Order History</h1>
                {order.length === 0 ? (
          <>
            {" "}
            <div className="py-8 px-12 w-full flex flex-col items-center gap-1 bg-[#F4F4F5] rounded-md">
              <Logo />
              <div className="text-lg font-semibold">No Orders Yet? </div>
              <div className="text-[#71717A] text-center text-sm">
                🍕 "You haven't placed any orders yet. Start exploring our menu
                and satisfy your cravings!"
              </div>
            </div>
            <button className="w-full border py-2 border-[#EF4444] rounded-full text-[#EF4444]">
              Add food
            </button>
          </>
        ) : (
          order.map((order, index) => (
            <OrderDetail key={index}/>
          ))
        
        )}
            </div>
        </Card>
    )
}