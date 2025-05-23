import { NavbarItem } from '../NavbarItem';
import { navbarItems } from '../../data/NavbarItems';
import {
  useBreakPointStore,
  useBreakPointListener,
} from '../../zustand/useBreakPoint';
import { useAuthStore } from '../../zustand/useLogged';
import { useNavigate } from 'react-router-dom';
import { useActiveNavbarItem } from '../../zustand/useActiveNavbar';
import axios from 'axios';

export const Header: React.FC = () => {
  const { isDesktop } = useBreakPointStore();
  const { activeItem, setActiveItem } = useActiveNavbarItem();
  const { logged, setLogged } = useAuthStore();
  useBreakPointListener();
  const navigate = useNavigate();
  const BACKEND = import.meta.env.VITE_BACKEND_LOGIN_URL;

  const handleLogOut = async () => {
    try {
      const res = await axios.post(
        `${BACKEND}/logout`,
        {},
        { withCredentials: true }
      );
      if (res.status === 200) {
        sessionStorage.removeItem('logged');
        console.log('logged out correct');
      }
    } catch (error) {
      console.error('Logout error', error);
    }
  };

  const handleItemClick = (itemName: string) => {
    console.log('itemName', itemName);
    setActiveItem(itemName);
    if (itemName === 'Log out') {
      setLogged(false);
      navigate('/start', { replace: true });
      handleLogOut();
      location.reload();
    }

    if (itemName === 'Log in') {
      setLogged(false);
      navigate('/start', { replace: true });
      location.reload();
    }
  };

  return (
    <nav
      role="menubar"
      className="fixed bottom-0 flex w-full justify-center overflow-auto border-t-1 border-[var(--color-grey-50)] border-r-[var(--color-grey-50)] bg-[var(--color-grey-70)] lg:sticky lg:h-full lg:border-t-0 lg:border-r-1 lg:border-r-[var(--color-grey-50)]"
    >
      <div className="flex w-full max-w-125 flex-row lg:h-[70%] lg:flex-col lg:items-start">
        {isDesktop && (
          <img
            className="mb-5 px-1.5 py-2.5"
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
