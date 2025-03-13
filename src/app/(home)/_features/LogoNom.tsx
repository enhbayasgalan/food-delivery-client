import { Logo } from "../_components/Logo";

export const LogoNomNom = () => {
  return (
    <div className="flex gap-2">
      <Logo/>
      <div className="flex flex-col gap-0">
        <div className="text-white font-[600] text-xl flex">
          <p>Nom</p><p className="text-[#EF4444]">Nom</p></div>
          <div className="text-sm font-[400] text-white">Swift delivery</div>
      </div>
    </div>
  );
};
