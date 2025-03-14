import { Category } from "./(home)/_features/Category";
import { Header } from "./(home)/_features/header";


export default function Home() {
  return (
    <div className="bg-[#404040] w-[2240px] h-[4331px] ">
      <Header/>
      <img src="/Nom.png" alt="home" />
      <Category />
    </div>
  );
}
