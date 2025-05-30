import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CartDetail } from "../_features/CartDetail";
import { OrderDetail } from "./OrderDetail";
import { UserDetail } from "./UserDetail";


export const FoodOrderItems = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild className="rounded-full  w-[46px] h-[46px] gap-[8px] bg-[#F4F4F5]">
            <ShoppingCart className="bg-secondary-foreground"/>
        </SheetTrigger>
        <SheetContent className="bg-[#404040] sm:max-w-xl w-[600px]">
          <SheetHeader>
            <SheetTitle className="font-medium text-xl text-white justify-between gap-3">
                <p className="font-semibold text-xl">Order Detail</p>
            </SheetTitle>
            <SheetDescription className="w-full p-5">
              <div>
              <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="account">Cart</TabsTrigger>
                  <TabsTrigger value="password">Order</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <CartDetail />
                </TabsContent>
                <TabsContent value="password">
                  <OrderDetail />
                </TabsContent>
              </Tabs>
              </div>
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <SheetClose asChild></SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <Button className="rounded-full bg-[#EF4444]">
        <UserDetail />
      </Button>
    </>
  );
};