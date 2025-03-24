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

import {  ChevronRight, MapPin, X } from "lucide-react";
import { FoodOrderItems } from "./FoodOrderItems";
import axios from "axios";
import React, {  useState } from "react";

export const Location = () => {
  const [address, setAddress] = useState("");

  const postAddress = async () => {
    const token = localStorage.getItem("token")
    try {
      const res = await axios.put(`http://localhost:5000/user/address`, {address : address}, {
        headers:{
          Authorization : token
        }
      })
      console.log(res);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  const handleValue = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setAddress(value)
  }
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
        <div
          className="flex py-2 px-3 gap-1 bg-[#FFFFFF] rounded-full text-sm items-center"
        >
          <MapPin stroke="#EF4444"/>
          {!address ? (
            <>
              <div className="text-[#EF4444]">Delivery address</div>
              <div className="text-[#18181B80] ">Add location</div>
              <ChevronRight stroke="#18181B80" />
            </>
          ) : (
            <div className="flex items-center gap-10 max-w-[200px]">
              <p className="text-black-500 text-sm">
                {address}
              </p>
              <X stroke="black"/>
            </div>
          )}
        </div>
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
              onChange={(e) => handleValue(e)}
            ></textarea>
          </div>
          <DialogFooter>
            <Button className="bg-[none] border text-black">Cancel</Button>
            <Button type="submit" onClick={postAddress}>
              Deliver here
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <FoodOrderItems />
    </div>
  );
};