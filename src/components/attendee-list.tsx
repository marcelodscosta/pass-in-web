import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search
} from 'lucide-react';
import { ChangeEvent, useState } from 'react';
import { IconButton } from './icon-button';
import { Table } from './table/table';
import { TableCell } from './table/table-cell';
import { TableHeader } from './table/table-header';

import { attendees } from "../data/attendees";

import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
dayjs.locale('pt-br');

const totalPages = Math.ceil(attendees.length / 10);

export function AttendeeList() {

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  function onSearchInputValue({ target: { value } }: ChangeEvent<HTMLInputElement>) {
    setSearch(value);
  };

  const goToNextPage = () => {
    setPage(page + 1);
  };

  const goToPrevieusPage = () => {
    setPage(page - 1);
  };

  const goToFirstPage = () => {
    setPage(1)
  }


  const goToLastPage = () => {
    setPage(totalPages)
  }

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
            onChange={onSearchInputValue}
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

          {attendees.slice((page - 1) * 10, page * 10).map(({ id, name, email, createAt, chekedInAt }) => (
            <tr key={id} className='border-b border-white/10 hover:bg-white/5'>
              <TableCell>
                <input type='checkbox' className='size-4 bg-black/20 rounded border-white/10 accent-orange-400' />
              </TableCell>
              <TableCell>{id}</TableCell>
              <TableCell>
                <div className='flex flex-col gap-1'>
                  <span className='font-semibold text-white'>{name}</span>
                  <span>{email}</span>
                </div>
              </TableCell>
              <TableCell>{dayjs().to(createAt)}</TableCell>
              <TableCell>{dayjs().to(chekedInAt)}</TableCell>
              <TableCell>
                <IconButton transparent>
                  {<MoreHorizontal className='size-4' />}
                </IconButton>
              </TableCell>
            </tr>
          ))}

        </tbody>

        <tfoot>
          <tr >
            <td colSpan={3} className='py-3 px-4 text-sm text-zinc-300'>
              Mostrando 10 de {attendees.length} itens
            </td>

            <td colSpan={3} className='py-3 px-4 text-sm text-zinc-300 text-right'>
              <div className='inline-flex items-center gap-8'>
                Página {page} de {totalPages}
                <div className='flex gap-1.5'>

                  <IconButton onClick={goToFirstPage} disabled={page === 1}>
                    <ChevronsLeft />
                  </IconButton>

                  <IconButton onClick={goToPrevieusPage} disabled={page === 1}>
                    <ChevronLeft />
                  </IconButton>

                  <IconButton onClick={goToNextPage} disabled={page === totalPages}>
                    <ChevronRight />
                  </IconButton>

                  <IconButton onClick={goToLastPage} disabled={page === totalPages}>
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