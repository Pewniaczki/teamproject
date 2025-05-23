import { create } from 'zustand';

type MatchIdType = Record<'1' | '2', number | null>;

type Props = {
  matchId: MatchIdType;
  setMatchId: (matchKey: number, key: '1' | '2', value: number) => void;
  getMatchId: (matchKey: number) => void;
};

export const useBettingStore = create<Props>((set, get) => ({
  matchId: { '1': null, '2': null },

  setMatchId: (matchKey, key, value) => {
    const updated = { ...get().matchId, [key]: value };
    set({ matchId: updated });

    localStorage.setItem(matchKey.toString(), JSON.stringify(updated));
  },

  getMatchId: (matchKey: number) => {
    try {
      const storedMatchId = localStorage.getItem(matchKey.toString());
      const parsed: MatchIdType = storedMatchId
        ? JSON.parse(storedMatchId)
        : { '1': null, '2': null };
      set({ matchId: parsed });
    } catch (error) {
      console.error('Error loading matchId from localStorage:', error);
      set({ matchId: { '1': null, '2': null } });
    }
  },
}));
