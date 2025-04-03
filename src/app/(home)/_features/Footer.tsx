'use client'

import { Facebook, Instagram } from "lucide-react"
import { Logo } from "../_components/Logo"
import { useCategory } from "@/provider/CategoryProvider"

export const Footer = () => {
  const { categories } = useCategory()
    return(
        <footer className="h-[570px] w-full bg-[#18181B] flex flex-col py-20 gap-10 items-center">
        <div className="relative w-full overflow-hidden bg-[#EF4444] py-7">
          <div className="flex gap-[56px] whitespace-nowrap ">
            <p className="text-white text-[30px] font-bold">
              Fresh fast delivered
            </p>
            <p className="text-white text-[30px] font-bold">
              Fresh fast delivered
            </p>
            <p className="text-white text-[30px] font-bold">
              Fresh fast delivered
            </p>
            <p className="text-white text-[30px] font-bold">
              Fresh fast delivered
            </p>
            <p className="text-white text-[30px] font-bold">
              Fresh fast delivered
            </p>
          </div>
        </div>
        <div className="w-[1264px] flex gap-[220px] mt-[70px]">
          <div>
            <Logo/>
            <div className="text-white font-[600] text-xl flex">
              <p>Nom</p><p className="text-[#EF4444]">Nom</p>
            </div>
          <div className="text-sm font-[400] text-white">Swift delivery</div>
          </div>
          <div className="flex gap-[112px]">
            <div className="flex flex-col gap-4 text-white">
              <p className="text-[#71717A]">NOM NOM</p>
              <p>Home</p>
              <p>Contact us</p>
              <p>Deliveryzone</p>
            </div>
            <div className="flex gap-[56px]">
              <div className="flex flex-col gap-4 text-white">
                <div className="text-[#71717A]">Menu</div>
                {categories.slice(0, 5).map((category) => (
                  <div key={category._id}>{category.categoryName}</div>
                ))}
              </div>
              <div className="flex flex-col gap-4 text-white">
                <div className="text-[#71717A]">Menu</div>
                {categories.slice(5, 10).map((category) => (
                  <div key={category._id}>{category.categoryName}</div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[#71717A]">Follow Us</p>
              <div className="flex gap-4">
                <Facebook className="bg-[#FFFF] border w-[28px] h-[27.03px] rounded-xl"/>
                <Instagram className="bg-[#FFFF] border w-[28px] h-[27.03px] rounded-xl"/>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}