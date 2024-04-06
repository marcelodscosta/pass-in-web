import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type TableCellProps = {} & ComponentProps<'td'>

export function TableCell({ ...rest }: TableCellProps) {
  return (
    <td
      {...rest}
      className={twMerge("py-3 px-4 text-sm", rest.className)}
    />
  );
};