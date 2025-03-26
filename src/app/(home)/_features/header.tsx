import { SearchCard } from "../_components/SearchCard"
import { LogoNomNom } from "./LogoNom"

export const Header = () => {
    return(
        <div className="w-full fixed px-[88px] py-[12px] h-[68px] justify-center items-center bg-[#18181B]">
            <div className="h-full w-full flex justify-between">
            <LogoNomNom />
            <SearchCard/>
            </div>
        </div>
    )
}