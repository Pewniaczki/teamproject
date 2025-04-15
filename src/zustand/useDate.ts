import { create } from "zustand";

type useDateType = {
    date: string,
    setDate: (value: string) => void,
}

export const useDateStore = create<useDateType>((set) => ({
    date: '21.01.2024',
    setDate: (value) => {
        set({date: value})
    }
}))