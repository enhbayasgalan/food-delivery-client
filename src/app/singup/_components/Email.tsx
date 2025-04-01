"use client"
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

type Props = {
    user: User
    setNewUser : (user:User)=>void
    setStep: (step: number)=>void
}
type User = {
    email : string, 
    password : string
}
export const Email = ({user, setNewUser, setStep} : Props) => {
    const [email, setEmail] = useState(false);
    const [emailerror] = useState(false)
    const ExamEmail = () => {
        const emailinvald = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (emailinvald.test(user.email)) {
            setStep(2)
        } else {
            setEmail(true)
        }
    }
    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setEmail(false) 
        setNewUser({...user, email:value})
    }
    const getEmail = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/user`)
            console.log(response);
        } catch (error) {
            console.error(error);
            
        }
    }
    useEffect(() => {
        getEmail()
    }, [])
    const notify = () => toast("Success Email ")
       return (
    <div>
      <Button className="w-9 h-9 border border-[#E4E4E7] rounded-md flex items-center justify-center">
        <ChevronLeft />
      </Button>
      <div>
        <p className="font-bold text-2xl mt-[15px]">Create your account</p>
        <p className="text-gray-500 mt-[7px]">
          Sign up to explore your favorite dishes.
        </p>
      </div>
      <div className="h-fit w-[416px] flex flex-col gap-2 ">
        <input
          className="h-9 pl-4 w-full border rounded-md mt-[15px]"
          placeholder="Enter your email address"
          onChange={(e) => handleEmailInput(e)}
          value={user.email}
          style={{borderColor : email === true ? "red" : "#71717A"}}
        />
        {emailerror === true && (
          <label className="text-red-600 text-sm">
            Invalid email. Use a format like example@email.com
          </label>
        )}
      </div>
      <Button className="py-[4px] w-[416px] border rounded-md mt-[15px] " onClick={ExamEmail} onClickCapture={notify}>
        lets go
      </Button>
    </div>
  );
};
