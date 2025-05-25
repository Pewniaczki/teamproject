import { create } from 'zustand';
import { DrawType, FirstType, ScoreType, TeamType } from '../types/teamTypes';

type RecordMatchIdType = Record<TeamType, number | null>;
type RecordBothType = Record<ScoreType, number | null>;
type RecordFirstType = Record<FirstType, number | null>;
type RecordDrawType = Record<DrawType, number | null>;

type CombinedType = RecordMatchIdType &
  RecordBothType &
  RecordFirstType &
  RecordDrawType;

type KeyType = TeamType | ScoreType | FirstType | DrawType;

type Props = {
  matchId: CombinedType;
  setMatchId: (matchKey: number, key: KeyType, value: number) => void;
  getMatchId: (matchKey: number) => void;
  removeMatchId: (matchKey: number) => void;
  removeBothScore: (MatchKey: number) => void;
  removeFirstScore: (MatchKey: number) => void;
  removeDraw: (MatchKey: number) => void;
};

const initialState = {
  '1': null,
  '2': null,
  '1f': null,
  '2f': null,
  yes: null,
  no: null,
  yesD: null,
  noD: null,
  wh: null
};

export const useBettingStore = create<Props>((set, get) => ({
  matchId: { ...initialState },

  setMatchId: (matchKey, key, value) => {
    const updatedMatchId = { ...get().matchId, [key]: value };
    set({ matchId: updatedMatchId });

    localStorage.setItem(matchKey.toString(), JSON.stringify(updatedMatchId));
  },

  getMatchId: (matchKey: number) => {
    const storedMatchId = localStorage.getItem(matchKey.toString());
    if (storedMatchId) {
      const parsed = JSON.parse(storedMatchId);

      set({ matchId: { ...initialState, ...parsed } });
    } else {
      set({
        matchId: { ...initialState },
      });
    }
  },

  removeMatchId: (MatchKey: number) => {
    localStorage.removeItem(MatchKey.toString());
    set(() => ({ matchId: { ...get().matchId, '1': null, '2': null } }));
  },

  removeBothScore: (MatchKey: number) => {
    localStorage.removeItem(MatchKey.toString());
    set(() => ({ matchId: { ...get().matchId, yes: null, no: null } }));
  },

  removeFirstScore: (MatchKey: number) => {
    localStorage.removeItem(MatchKey.toString());
    set(() => ({ matchId: { ...get().matchId, '1f': null, '2f': null, 'wh': null } }));
  },

  removeDraw: (MatchKey: number) => {
    localStorage.removeItem(MatchKey.toString());
    set(() => ({ matchId: { ...get().matchId, yesD: null, noD: null } }));
  },
}));
