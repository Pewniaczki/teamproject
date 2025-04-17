import { create } from "zustand";
import { navbarItems } from '../data/NavbarItems';

type ActiveState = {
    activeItem: string,
    setActiveItem: (value: string) => void,
}

export const useActiveNavbarItem = create<ActiveState>((set) => ({
    activeItem: sessionStorage.getItem('activetem') || navbarItems[0].text,
    setActiveItem: (value) => {
        set({activeItem: value})
        sessionStorage.setItem('activetem', value);
    }
}))