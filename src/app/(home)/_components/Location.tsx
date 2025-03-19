"use client"

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, MapPin, UserRound, UserRoundPen } from "lucide-react";
import { FoodOrderItems } from "./FoodOrderItems";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const Location = () => {
  // const [location, setLocation] = useState("")
  // const [address, setAddress] = useState(null)
  // const postaddress = async () => {
  //   try {
  //     const res = await axios.post(`http://localhost:5000/user/address`)
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   postaddress()
  // }, [])
  // const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   const value = e.target.value
  //   setLocation(value)
  // }
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="flex px-3 py-2 gap-2 rounded-full text-sm items-center"
          >
            <MapPin stroke="#EF4444" />
            <div className="text-[#EF4444]">Delivery address:</div>
            <div className="text-[#18181B80]">Add Location</div>
            <ChevronLeft stroke="#18181B8" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delivery address</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <textarea
              className="bg-[#FFFFF] border w-full rounded-md h-[100px]"
              placeholder="Please provide specific address details such as building number, entrance, and apartment number"
              rows={5}
              // onChange={(e) => handleChange(e)}
            ></textarea>
          </div>
          <DialogFooter>
            <Button className="bg-[none] border text-black">Cancel</Button>
            <Button type="submit" >
              Deliver here
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <FoodOrderItems />
    </div>
  );
};