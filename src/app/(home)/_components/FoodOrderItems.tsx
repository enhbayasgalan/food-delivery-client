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
  LucideAlignCenterHorizontal,
  ShoppingCart,
  UserRoundPen,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CartDetail } from "../_features/CartDetail";
import { OrderDetail } from "./OrderDetail";

export const FoodOrderItems = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="rounded-full">
            <ShoppingCart />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-[#404040] sm:max-w-xl w-[600px]">
          <SheetHeader>
            <SheetTitle className="font-medium text-xl text-white">
              Order detail
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
        <UserRoundPen />
      </Button>
    </>
  );
};