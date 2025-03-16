import styles from './Header.module.scss';

import { NavbarItem } from '../NavbarItem';
import { useEffect, useState } from 'react';
import { navbarItems } from '../../data/NavbarItems';
import {
  useBreakPointStore,
  useBreakPointListener,
} from '../../zustand/useBreakPoint';
import { NavbarItemType } from '../../types/navbarItemType';
import { useAuthStore } from '../../zustand/useLogged';

export const Header: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>(navbarItems[0].text);
  const { isDesktop } = useBreakPointStore();
  const [visibleNavbarItems, setVisibleNavbarItems] = useState<
    NavbarItemType[]
  >([]);
  const { logged, setLogged } = useAuthStore();
  useBreakPointListener();

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
    if (itemName === 'Log out') {
      setLogged(false)
    }
  };

  useEffect(() => {
    if (!isDesktop) {
      setVisibleNavbarItems(navbarItems.slice(0, -2));
    } else {
      setVisibleNavbarItems(navbarItems);
    }
  }, [isDesktop, navbarItems]);

  return (
    <nav role="menubar" className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {isDesktop && (
          <img
            className={styles.navbar__logo}
            src="./UI_Elements/Name_logo.svg"
          />
        )}

        {visibleNavbarItems.map((item) => {
          if (item.text === 'Log in' && logged) return null;
          if (item.text === 'Log out' && !logged) return null;
          return (
            <NavbarItem
              key={item.text}
              text={item.text}
              icon={<item.icon />}
              active={activeItem === item.text}
              link={item.link}
              onClick={() => handleItemClick(item.text)}
            />
          );
        })}
      </div>
    </nav>
  );
};
