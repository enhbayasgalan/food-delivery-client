"use client";

import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel";
import axios from "axios";
import { useEffect, useState } from "react";


type Props = {
    categories : category[]
}

type category = {
    categoryName : string,
    _id : string
}

export const Category = () => {
    const [categories, setCategory] = useState([])
    const getCategory = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/category`)
            console.log(res);
            
            setCategory(res.data)
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
        getCategory()
    },[])
    return(
        <div className="flex w-[1440px] px-[32px] py-[48px] flex-col gap-[36px]">
            <p className="text-2xl font-semibold text-white">Categories</p>
            <Carousel>
                <CarouselContent className="gap-3">
                    {categories?.map((category : category, index) => (
                        <CarouselItem className="bg-[#FFFF] gap-[8px] py-3 py-1 text-black rounded-full pl-4" key={index}>
                            {category.categoryName}
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}