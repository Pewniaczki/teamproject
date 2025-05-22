import { create } from 'zustand';

interface AuthState {
  logged: boolean;
  setLogged: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  logged: sessionStorage.getItem('logged') === 'true',
  setLogged: (value) => {
    if (value === false) {
      sessionStorage.removeItem('logged');
      set({ logged: value });
      return;
    }

    sessionStorage.setItem("logged", value.toString());
    set({ logged: value });
  },
}));
