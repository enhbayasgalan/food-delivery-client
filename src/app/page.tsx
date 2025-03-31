/* eslint-disable @next/next/no-img-element */

import { Category } from "./(home)/_features/Category";
import { Footer } from "./(home)/_features/Footer";
import { Header } from "./(home)/_features/header";


export default function Home() {
  return (
    <div className="bg-[#404040] w-[2240px] h-fit">
      <Header/>
      <img src="/foodimage.png" alt="home" className="w-[2240px] h-[800px] top-[68px]"/>
      <Category/>
      <Footer/>
    </div>
  );
}
