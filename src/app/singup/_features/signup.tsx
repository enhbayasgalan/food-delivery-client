"use client"

import { useState } from "react"
import axios from "axios"
import { Email } from "../_components/Email"
import { Password } from "../_components/Password"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"


type User = {
  email : string,
  password : string
}

export const SignUpEmail = () => {
  const router = useRouter();
  const [newUser, setNewUser] = useState<User>({email: "", password: ""})
  const [step, setStep] = useState<number>(1);
  const LoginPage = () => {
    router.push("/loginpage");
  }
  console.log(newUser);
  const postUser = async () => {
    try {
      const res = await axios.post(`http://localhost:5000/user`, newUser)
      if (res.status === 200) {
        router.push('/loginpage')
      }
      console.log(res);
      
    } catch (error) {
      console.error("Error posting usr:", error)
      
    }
  }
  return(
    <div className="w-full h-full flex justify-center items-center flex-col gap-4 ">
      <div className="w-full flex flex-col h-fti gap-6">
        {step === 1 ? (
            <Email user={newUser} setNewUser={setNewUser} setStep={setStep}/>
        ) : (   
            <Password user={newUser} setUser={setNewUser} setStep={setStep} postUser={postUser}/>
        )}
        <div className="flex w-[416px] justify-center gap-4">
          <p>Already have a account</p>
          <Button onClick={LoginPage} className="text-[#2563EB]" variant="outline">
            Login in
          </Button>
        </div>
      </div>
    </div>
  )
}