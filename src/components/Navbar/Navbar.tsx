import styles from './Navbar.module.scss';

import { NavbarItem } from '../NavbarItem';
import { useEffect, useState } from 'react';
import { navbarItems } from '../../data/NavbarItems';
import {
  useBreakPointStore,
  useBreakPointListener,
} from '../../zustand/useBreakPoint';
import cn from 'classnames';
import { NavbarItemType } from '../../types/navbarItemType';

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>(navbarItems[0].text);
  const { isDesktop } = useBreakPointStore();
  const [visibleNavbarItems, setVisibleNavbarItems] = useState<
    NavbarItemType[]
  >([]);
  useBreakPointListener();

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  useEffect(() => {  
    if (!isDesktop) {
      setVisibleNavbarItems(navbarItems.slice(0, -2));
    } else {
      setVisibleNavbarItems(navbarItems);
    }
  }, [isDesktop, navbarItems]);
  

  return (
    <nav
      role="menubar"
      className={cn({
        [styles.navbar]: !isDesktop,
        [styles.navbar_desktop]: isDesktop,
      })}
    >
      <div
        className={cn({
          [styles.navbarContainer]: !isDesktop,
          [styles.navbar_desktopContainer]: isDesktop,
        })}
      >
        {isDesktop && (
          <img
            className={styles.navbar_desktop__logo}
            src="./UI_Elements/Name_logo.svg"
          />
        )}
        {visibleNavbarItems.map((item) => (
          <NavbarItem
            key={item.text}
            text={item.text}
            icon={<item.icon />}
            active={activeItem === item.text}
            link={item.link}
            onClick={() => handleItemClick(item.text)}
          />
        ))}
      </div>
    </nav>
  );
};
