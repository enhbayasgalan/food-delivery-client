
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import axios from "axios";
import { Minus, Plus } from "lucide-react"
import { useEffect, useState } from "react"
import { useDebounce } from "use-debounce";
type Props = {
    food : food, 
    getCartItems : Function,
    quantity : number
}
type food = {
    foodName: string
    price: number
    image: string
    ingredients: string
}


export const FoodDetail = ({food, getCartItems,  quantity } : Props) => {
    const [foodItemsquantity, setQuantity] = useState<food[]>([])

    //     const putQuantity = async () => {

    //             try {
    //                 const res = await axios.put(`http://localhost:5000/order`)
    //                 getCartItems()
    //                 console.log(res);
    //             } catch (error) {
    //                 console.error(error);
    //             }
    //         }
    // useEffect(() => {
    //     putQuantity()
    //     setQuantity([])
    // }, [quantity])
    

    return(
        <Dialog >
      <DialogTrigger asChild className="flex w-[44px] h-[44px] px-[8px] py-[16px] justify-center items-center gap-[8px]">
        <Button variant="outline" className="rounded-full">
            <Plus stroke="#EF4444"/> 
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[778px] max-h-[364px]">
        <DialogHeader>
          <DialogTitle className="flex flex-col justify-between ">
             <p className="font-semibold text-3xl text-[#EF4444]">{food.foodName}</p>
             <div className="mt-[10px]">
                {food.ingredients}
             </div>
          </DialogTitle>
          <div >
            <p className="font-normal text-base mt-[50px]">Total Price</p>
            <p className="font-semibold text-2xl">{food.price}$</p>
          </div>
        </DialogHeader>
        <div className="justify-between flex w-full">
            <div className="flex items-center gap-2">
                <Button className="p-1 rounded-full">
                    <Minus size={20}/>
                </Button>
                <Button className="p-1 rounded-full">
                    <Plus size={20}/>
                </Button>
            </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    )
}
// max-w-[778px] max-h-[364px]