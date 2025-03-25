import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { Logo } from "./Logo"
import { Button } from "@/components/ui/button"
import { OrderHistory } from "./OrderHistory"
type CartItems = {
  food: food;
  quantity: number;
  _id: string;
};
type food = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  category: string;
  _id: string;
};


export const OrderDetail = () => {
  const [cartitems, setCartItmes] = useState<CartItems[]>([]);
    const getItems = async () => {
      const cart = localStorage.getItem("cart")
      if (cart) {
        setCartItmes(JSON.parse(cart))
      }
    };
    useEffect(() => {
      getItems();
    }, []);
    return(
      <div className="w-full h-full flex flex-col gap-6">
      <Card className="p-4 w-full rounded-xl flex flex-col gap-5">
        <h1 className="font-semibold text-xl">Order History</h1>

        {cartitems.length === 0 ? (
          <div className="py-8 px-12 w-full flex flex-col items-center gap-1 bg-[#F4F4F5] rounded-md">
            <Logo />
            <div className="text-lg font-semibold">Your cart is empty</div>
            <div className="text-[#71717A] text-center text-sm">
            🍕 &quot;You haven&apos;t placed any orders yet. Start exploring our menu
            and satisfy your cravings!&quot;
            </div>
          </div>
        ) : (
          cartitems.map((item, index) => (
            <OrderHistory key={index}/>
          ))
        )}

        <Button className="px-[8px] py-[32px] justify-center items-center gap-[8px] h-[44px] bg-[#EF4444] rounded-full">
            add foods
        </Button>
      </Card>
    </div>
    )
}