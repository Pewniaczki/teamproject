import { create } from 'zustand';

interface AuthState {
  logged: boolean;
  setLogged: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  logged: localStorage.getItem('logged') === 'true',
  setLogged: (value) => {
    if (value === false) {
      localStorage.removeItem('logged');
      set({ logged: value });
      return;
    }

    localStorage.setItem("logged", value.toString());
    set({ logged: value });
  },
}));
