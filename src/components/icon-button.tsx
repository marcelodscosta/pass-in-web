import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type IconButtonProps = {

  children: React.ReactNode,
  transparent?: boolean,

} & ComponentProps<'button'>


export function IconButton({ children, transparent, ...rest }: IconButtonProps) {
  return (
    <button
      // className=
      // {transparent
      //   ? 'bg-black/20 border border-white/10 rounded-md p-1.5'
      //   : 'bg-white/10 border-white/10 rounded-md p-1.5'}
      {...rest}
      className={twMerge(
        'border border-white/10 rounded-md p-1.5',
        transparent ? 'bg-black/20' : 'bg-black/10',
        rest.disabled ? 'opacity-50' : null,
      )}
    >
      {children}
    </button>
  );
};