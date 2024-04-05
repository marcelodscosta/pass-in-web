import { ComponentProps } from "react";

type NavLinkProps = {
  children: string;
  href: string
} & ComponentProps<'a'>


export function NavLink({ children, href, ...rest }: NavLinkProps) {
  return (
    <a
      href={href}
      className="font-medium text-sm text-zinc-300"
      {...rest}>
      {children}
    </a>
  );
};