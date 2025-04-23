import styles from './Header.module.scss';

import { NavbarItem } from '../NavbarItem';
import { navbarItems } from '../../data/NavbarItems';
import {
  useBreakPointStore,
  useBreakPointListener,
} from '../../zustand/useBreakPoint';
import { useAuthStore } from '../../zustand/useLogged';
import { useNavigate } from 'react-router-dom';
import { useActiveNavbarItem } from '../../zustand/useActiveNavbar';

export const Header: React.FC = () => {
  const { isDesktop } = useBreakPointStore();
  const {activeItem, setActiveItem} = useActiveNavbarItem();
  const { logged, setLogged } = useAuthStore();
  useBreakPointListener();
  const navigate = useNavigate();

  const handleItemClick = (itemName: string) => {
    console.log('itemName', itemName);
    setActiveItem(itemName);
    if (itemName === 'Log out') {
      setLogged(false);
      navigate('/start', { replace: true });
      location.reload();
    }

    if (itemName === 'Log in') {
      setLogged(false);
      navigate('/start', { replace: true });
      location.reload();
    }
  };

  return (
    <nav role="menubar" className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {isDesktop && (
          <img
            className={styles.navbar__logo}
            src="./UI_Elements/Name_logo.svg"
          />
        )}

        {navbarItems.map((item) => {
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
