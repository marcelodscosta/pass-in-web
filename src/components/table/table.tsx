import { ComponentProps } from "react";

type TableProps = {} & ComponentProps<'table'>


export function Table({ ...rest }: TableProps) {
  return (
    <div className="border border-white/10 rounded-lg py-4">
      <table {...rest} className='w-full' />
    </div>
  );
};