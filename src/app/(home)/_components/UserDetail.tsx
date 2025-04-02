"use client";
import { User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuRadioGroup } from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

export const UserDetail = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const getEmail = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const decoded = jwtDecode<{ email: string }>(token);
    setEmail(decoded.email);
  };
  useEffect(() => {
    getEmail();
  }, []);
  const signOut = () => {
    router.push("loginpage");
  };
  const notify = () => toast("Login && Sign up Page");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="rounded-full flex items-center w-11 h-full border-none justify-center bg-[#EF4444]">
          <User size={16} stroke="#FFFFFF" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[188px] p-4 gap-2">
        <DropdownMenuLabel>{email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={"bottom"}
          className="flex justify-center"
        >
          <Button
            className="rounded-full bg-gray-400"
            onClick={signOut}
            onClickCapture={notify}
          >
            Sign out
          </Button>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
