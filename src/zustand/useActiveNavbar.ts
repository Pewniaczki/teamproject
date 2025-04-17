import { create } from "zustand";

type ActiveState = {
    activeItem: string,
    setActiveItem: (value: string) => void,
}

export const useActiveNavbarItem = create<ActiveState>((set) => ({
    activeItem: sessionStorage.getItem('activetem') || '',
    setActiveItem: (value) => {
        set({activeItem: value})
        sessionStorage.setItem('activetem', value);
    }
}))