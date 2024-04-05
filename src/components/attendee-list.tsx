import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search
} from 'lucide-react';
import { IconButton } from './icon-button';
import { Table } from './table/table';
import { TableCell } from './table/table-cell';
import { TableHeader } from './table/table-header';

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

      <Table>

        <thead>
          <tr className='border-b border-white/10'>

            <TableHeader>
              <input
                type='checkbox'
                className='size-4 bg-black/20 rounded border-white/10 accent-orange-400'
              />
            </TableHeader>

            <TableHeader style={{ width: 64 }}>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data do check-in</TableHeader>
            <TableHeader style={{ width: 64 }} />

          </tr>
        </thead>

        <tbody>

          {Array.from({ length: 10 }).map((_, i) => (
            <tr key={i} className='border-b border-white/10 hover:bg-white/5'>
              <TableCell>
                <input type='checkbox' className='size-4 bg-black/20 rounded border-white/10 accent-orange-400' />
              </TableCell>
              <TableCell>0325</TableCell>
              <TableCell>
                <span className='font-semibold text-white'>Marcelo Costa</span>
                <span>marcelodscosta@yahoo.com.br</span>
              </TableCell>
              <TableCell>7 dias atrás</TableCell>
              <TableCell>3 dias atrás</TableCell>
              <IconButton transparent>
                {<MoreHorizontal className='size-4' />}
              </IconButton>
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

                  <IconButton>
                    <ChevronsLeft />
                  </IconButton>

                  <IconButton>
                    <ChevronLeft />
                  </IconButton>

                  <IconButton>
                    <ChevronRight />
                  </IconButton>

                  <IconButton>
                    <ChevronsRight />
                  </IconButton>

                </div>
              </div>
            </td>
          </tr>
        </tfoot>

      </Table>

    </div>
  );
}