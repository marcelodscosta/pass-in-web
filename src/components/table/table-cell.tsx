import { ComponentProps } from "react";

type TableCellProps = {} & ComponentProps<'td'>

export function TableCell({ ...rest }: TableCellProps) {
  return (
    <td {...rest} className="py-3 px-4 text-sm" />
  );
};