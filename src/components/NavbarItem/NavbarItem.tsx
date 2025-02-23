import React from 'react';
import styles from './NavbarItem.module.scss';
import cn from 'classnames';
import {
  useBreakPointListener,
  useBreakPointStore,
} from '../../zustand/useBreakPoint';

type NavbarItemProps = {
  text: string;
  icon: React.ReactNode;
  active?: boolean;
  link: string;
  onClick?: () => void;
};

export const NavbarItem = ({
  text,
  icon,
  active = false,
  link,
  onClick,
}: NavbarItemProps) => {
  const { isDesktop } = useBreakPointStore();
  useBreakPointListener();

  return (
    <a
      href={link}
      className={cn({
        [styles.navbarItem] : !isDesktop,
        [styles.navbarItem__desktop] : isDesktop,
        [styles.active]: active
      })}
      role="menuitem"
      onClick={onClick}
    >
      {React.cloneElement(icon as React.ReactElement, {
        className:cn({
          [styles.navbarItemIcon]: !isDesktop,
          [styles.navbarItem__desktopIcon]: isDesktop,
        }),
      })}
      <p className={cn({
          [styles.navbarItemText]: !isDesktop,
          [styles.navbarItem__desktopText]: isDesktop,
        })}>{text}</p>
    </a>
  );
};
