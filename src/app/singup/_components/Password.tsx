"use client";

import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
type Props = {
  user: User;
  setStep: (step: number) => void;
  setUser: (user: User) => void;
  postUser(): Promise<void>;
};

type User = {
  email: string;
  password: string;
};

export const Password = ({ user, postUser, setUser, setStep }: Props) => {
  const [confirm, setConfirm] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>();
  const [show, setShow] = useState(false);
  const LoginPage = () => {
    // const passwordinvaild = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (user.password) {
      if (user.password === confirm) {
        postUser();
      } else {
        setPasswordError("wrong!");
      }
    } else {
      setPasswordError("wrong password!");
    }
  };
  console.log(user);
  const notify = () => toast("Success Password")

  return (
    <div>
      <Button
        onClick={() => setStep(1)}
        className="w-9 h-9 border border-[#E4E4E7] rounded-md flex items-center justify-center"
      >
        <ChevronLeft />
      </Button>
      <div>
        <p className="font-bold text-2xl mt-[15px]">Create a strong password</p>
        <p className="text-gray-500">
          Create a strong password with letters, numbers.
        </p>
      </div>
      <form className="flex flex-col gap-3">
        <input
          className="h-9 pl-4 w-[416px] border rounded-md mt-[15px]"
          placeholder="confirm-password"
          type={show === true ? "text" : "password"}
          value={user.password}
          onChange={(e) => setUser({ ... user, password:e.target.value})}
          style={{
            borderColor: passwordError === "wrong!" ? "red" : "#71717A",
          }}
        />
        <div className="flex flex-col">
          <input
            className="h-9 pl-4 w-[416px] border rounded-md mt-[15px]"
            placeholder="confirm-password"
            type={show === true ? "text" : "password"}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            style={{
              borderColor:
                passwordError === "wrong password!" ? "red" : "#71717A",
            }}
          />
          {passwordError && (
            <label className="text-red-600 text-sm mt-2">
              {passwordError === "!wrong" &&
                "wrong password. Use numbers and symbols"}
              {passwordError === "wrong password!" &&
                "those password didnt match, Try again"}
            </label>
          )}
        </div>
        <div className="flex gap-2 items-center">
          <Input
            type="checkbox"
            className="w-[50px] h-[16px]"
            onClick={() => setShow((prev) => !prev)}
          />
          <p  >show password</p>
        </div>
      </form>
      <Button
        className="py-[14px] w-[416px] border roundedmd mt-[10px]"
        onClick={LoginPage}
        onClickCapture={notify}
      >
        lets go
      </Button>
    </div>
  );
};