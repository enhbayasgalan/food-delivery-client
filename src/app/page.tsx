
import { Category } from "./(home)/_features/Category";
import { Footer } from "./(home)/_features/Footer";
import { Header } from "./(home)/_features/header";


export default function Home() {
  return (
    <div className="bg-[#404040] w-[2240px] h-fit ">
      <Header/>
      <img src="/Nom.png" alt="home" />
      <Category />
      <Footer/>
    </div>
  );
}
