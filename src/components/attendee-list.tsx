import { Search } from 'lucide-react';

export function AttendeeList() {
  return (
    <div className="flex items-center gap-5">
      <h1 className="text-2xl font-bold">Participantes</h1>

      <div className=" flex w-72 px-3 py-1.5 border border-white/10 rounded-lg text-sm gap-3">
        <Search className="size-4 text-emerald-300" />
        <input
          type="text"
          placeholder="Buscar participante"
          className="w-full bg-transparent outline-none"
        />
      </div>
    </div>
  );
}