import styles from './Navbar.module.scss';

import { NavbarItem } from '../NavbarItem';
import { useState } from 'react';
import { navbarItems } from '../../data/NavbarItems';

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>(navbarItems[0].text);

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  return (
    <nav role="menubar" className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {navbarItems.map((item) => (
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
