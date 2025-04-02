/* eslint-disable @next/next/no-img-element */

import { Category } from "./(home)/_features/Category";
import { Footer } from "./(home)/_features/Footer";
import { Header } from "./(home)/_features/header";

export default function Home() {
  return (
    <div className="bg-[#404040] w-screen h-fit flex items-center flex-col">
      <Header />
      <img
        src="/foodimage.png"
        alt="home"
        className="w-full h-[800px] top-[68px]"
      />
      <Category />
      <Footer />
    </div>
  );
}
