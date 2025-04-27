import React from 'react';
import styles from './NavbarItem.module.scss';
import cn from 'classnames';
type NavbarItemProps = {
  text: string;
  icon: React.ReactNode;
  active?: boolean;
  link?: string;
  onClick?: () => void;
};

export const NavbarItem = ({
  text,
  icon,
  active = false,
  link,
  onClick,
}: NavbarItemProps) => {
  return (
    <a
      href={link}
      className={`flex basis-[20%] flex-col items-center justify-center gap-1.5 p-2 text-[var(--color-grey-40)] no-underline lg:max-h-20 lg:min-h-20 lg:flex-row ${active && 'text-[var(--color-secondary)]'}`}
      role="menuitem"
      onClick={onClick}
    >
      {React.cloneElement(icon as React.ReactElement, {
        className: 'text-inherit w-6 h-6',
      })}
      <p className="text-sm leading-3.5 font-bold text-inherit">{text}</p>
    </a>
  );
};
