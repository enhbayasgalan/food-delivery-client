"use client";

import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

import axios from "axios";
type form = {
  email: string;
  password: string;
};
export const Login = () => {
  const router = useRouter();
  const [form, setForm] = useState<form>({ email: "", password: "" });
  const [emialInvalid, setEmailInvalid] = useState(false);
  const [showpass, setShowpass] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm({ ...form, email: value });
  };
  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm({ ...form, password: value });
  };
  const Check = async () => {
    console.log(form);
    try {
      const res = await axios.post(`http://localhost:5000/user/login`, form );
      console.log(res);
      if (res.data !== "user not found" && res.data !== 'Wrong password') {
        localStorage.setItem('token',res.data)
        router.push('/')
      }

      
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(form);

  return (
    <div className="w[416px] flex items-center justify-center">
      <div className="w-[80%] flex flex-col h-fit gap-6">
        <Button className="w-9 h-9 border border-[#E4E4E7] rounded-md flex items-center justify-center">
          <ChevronLeft />
        </Button>
        <div>
          <p className="font-bold text-2xl">Log in</p>
          <p className="text-gray-500">log in enjoy your favorite dishes</p>
        </div>
        <form className="flex felx-col gap-4">
          <div className="h-fit w-full flex flex-col gap-2">
            <Input
              className="h-9 pl-4 w-full gap-2"
              placeholder="enter your email address"
              onChange={(e) => handleInput(e)}
              value={form.email}
              style={{ borderColor: emialInvalid === true ? "red" : "#71717A" }}
            />
            {emialInvalid === true && (
              <label className="text-red-500 text-sm">
                Invalid email. user format like example@email.com
              </label>
            )}
          </div>
          <Input
            type={showpass === true ? "text" : "password"}
            className="h-9 pl-4 w-full border rounded-md"
            placeholder="new-password"
            onChange={(e) => handlePasswordInput(e)}
            value={form.password || ""}
          />
          <div className="flex gap-2">
            <Input
              type="checkbox"
              onClick={() => setShowpass((prev) => !prev)}
            />
            <p>show password</p>
          </div>
        </form>
        <Button className="py-[4px]w-full border rounded-md" onClick={Check}>
          lets go
        </Button>
        <div className="flex w-full justify-center gap-4">
          <p>Dont have a account?</p>
          <p onClick={() => router.push("/singup")} className="text-[#2563EB]">
            sign up
          </p>
        </div>
      </div>
    </div>
  );
};
