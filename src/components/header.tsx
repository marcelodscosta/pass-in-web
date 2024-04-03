import nwlUniteIcon from "../assets/nlw-unite-icon.svg";

export function Header() {
  return (
    <div className="flex items-center gap-5">
      <img src={nwlUniteIcon} alt="" />

      <nav className="flex gap-5 items-center">
        <a href="" className="font-medium text-sm text-zinc-300">Eventos</a>
        <a href="" className="font-medium text-sm text-zinc-300">Participantes</a>
      </nav>
    </div>
  );
}