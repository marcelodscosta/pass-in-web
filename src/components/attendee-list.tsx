import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search
} from 'lucide-react';

export function AttendeeList() {
  return (
    <div className='flex flex-col gap-4'>
      <div className="flex items-center gap-5">
        <h1 className="text-2xl font-bold">Participantes</h1>

        <div className="flex w-72 px-3 py-1.5 border border-white/10 rounded-lg text-sm gap-3 items-center">
          <Search className="size-6 text-emerald-300" />
          <input
            type="text"
            placeholder="Buscar participante"
            className="w-full bg-transparent border-none"
          />
        </div>
      </div>

      <div className="border border-white/10 rounded-lg py-4">
        <table className='w-full'>

          <thead>
            <tr className='border-b border-white/10'>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                <input type='checkbox' className='size-4 bg-black/20 rounded border-white/10 accent-orange-400' />
              </th>
              <th style={{ width: 64 }} className="py-3 px-4 text-sm font-semibold text-left">Código</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Participante</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Data de inscrição</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Data do check-in</th>
              <th style={{ width: 64 }}></th>
            </tr>
          </thead>

          <tbody>

            {Array.from({ length: 10 }).map((_, i) => (
              <tr key={i} className='border-b border-white/10 hover:bg-white/5'>
                <td className="py-3 px-4 text-sm">
                  <input type='checkbox' className='size-4 bg-black/20 rounded border-white/10 accent-orange-400' />
                </td>
                <td className="py-3 px-4 text-sm">0325</td>
                <td className='flex flex-col gap-1'>
                  <span className='font-semibold text-white'>Marcelo Costa</span>
                  <span>marcelodscosta@yahoo.com.br</span>
                </td>
                <td className="py-3 px-4 text-sm ">7 dias atrás</td>
                <td className="py-3 px-4 text-sm ">3 dias atrás</td>
                <button className='bg-black/20 border-white/10 rounded-md p-1.5'>{<MoreHorizontal className='size-4' />}</button>
              </tr>
            ))}

          </tbody>

          <tfoot>
            <tr >
              <td colSpan={3} className='py-3 px-4 text-sm text-zinc-300'>
                Mostrando 10 de 228 itens
              </td>

              <td colSpan={3} className='py-3 px-4 text-sm text-zinc-300 text-right'>
                <div className='inline-flex items-center gap-8'>
                  Página 1 de 23
                  <div className='flex gap-1.5'>
                    <button className='bg-black/20 border border-white/10 rounded-md p-1.5'>
                      <ChevronsLeft />
                    </button>
                    <button className='bg-black/20 border border-white/10 rounded-md p-1.5'>
                      <ChevronLeft />
                    </button>
                    <button className='bg-black/20 border border-white/10 rounded-md p-1.5'>
                      <ChevronRight />
                    </button>
                    <button className='bg-black/20 border border-white/10 rounded-md p-1.5'>
                      <ChevronsRight />
                    </button>

                  </div>
                </div>
              </td>
            </tr>
          </tfoot>

        </table>
      </div>
    </div>
  );
}