"use client";

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

import { ChevronRight, MapPin } from "lucide-react";
import { FoodOrderItems } from "./FoodOrderItems";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

import { useUser } from "@/provider/UserProvider";

export const Location = () => {
  const [address, setAddress] = useState("");

  const {refetchOrder,setOpenAddress} = useUser()

  const postAddress = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.put(
        `https://food-delivery-service-0wy6.onrender.com/user/address`,
        { address: address },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(res);
      await refetchOrder()
    } catch (error) {
      console.log(error);
    }
  };
  const [user, setUser] = useState<{ email: string; address: string }>();

  const getEmail = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const decoded = jwtDecode<{ email: string; address: string }>(token);
    setUser(decoded);
  };
  useEffect(() => {
    getEmail();
  }, []);

  const notify = () => toast("Success location");

  const handleValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setAddress(value);
  };

  return (
    <div className="jusify-between flex gap-[20px]">
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex py-2 px-3 gap-1 bg-[#FFFFFF] rounded-full text-sm items-center" onClick={() => setOpenAddress(true)}>
            <MapPin stroke="#EF4444" />
            {!user?.address ? (
              <>
                <div className="text-[#EF4444]">Delivery address</div>
                <div className="text-[#18181B80] ">Add location</div>
                <ChevronRight stroke="#18181B80" />
              </>
            ) : (
              <div className="flex items-center gap-10 max-w-[200px]">
                <p className="text-black-500 text-sm text-black">
                  {user?.address}
                </p>
              </div>
            )}
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle onClick={() => setOpenAddress(false)}>Delivery address</DialogTitle>
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
            <Button type="submit" onClick={postAddress} onClickCapture={notify}>
              Deliver here
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <FoodOrderItems />
    </div>
  );
};
