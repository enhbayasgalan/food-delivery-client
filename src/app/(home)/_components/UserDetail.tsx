'use client'
import {
    Cloud,
    CreditCard,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users,
  } from "lucide-react"
   
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { DropdownMenuRadioGroup } from "@radix-ui/react-dropdown-menu"
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"

export const UserDetail = () => {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const getEmail = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/user`)
            console.log(res);
            
        } catch (error) {
            console.error(error);
            
        }
    }
    useEffect(() => {
        getEmail()
    }, [])
    const signOut = () => {
        router.push('login')
    }
    return(
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="rounded-full flex items-center w-11 h-full border-none justify-center bg-[#EF4444]"><User size={16} stroke="#FFFFFF"/></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[188px] p-4 gap-2">
          <DropdownMenuLabel>{email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={"bottom"} className="flex justify-center">
            <Button className="rounded-full">Sign out</Button>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
}