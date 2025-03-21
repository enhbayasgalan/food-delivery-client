import { useReducer } from "react"
import { SearchCard } from "../_components/SearchCard"
import { LogoNomNom } from "./LogoNom"
import { useRouter } from "next/router"

export const Header = () => {
    return(
        <div className="w-[2238px] fixed px-[88px] py-[12px] h-[68px] justify-center items-center bg-[#18181B]">
            <div className="h-full w-full flex justify-between">
            <LogoNomNom />
            <SearchCard/>
            </div>
        </div>
    )
}