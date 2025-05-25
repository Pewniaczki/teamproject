import axios from 'axios';
import { Match } from '../../types/countryMatchesTypes';

import { useEffect } from 'react';
import {
  DrawType,
  FirstType,
  ScoreType,
  TeamType,
} from '../../types/teamTypes';
import { useBettingStore } from '../../zustand/useBetting';

type Props = {
  currentMatch: Match;
};

const BACKEND = import.meta.env.VITE_BACKEND_PEWNIACZKI;

export const CurrentDetails: React.FC<Props> = ({ currentMatch }) => {
  const {
    getMatchId,
    setMatchId,
    matchId,
    removeMatchId,
    removeFirstScore,
    removeBothScore,
    removeDraw,
  } = useBettingStore();

  const handlerWinner = async (matchIde: number, team: TeamType) => {
    try {
      if ((matchId['1'] || matchId['2']) !== null) {
        return;
      }

      const response = await axios.post(`${BACKEND}/api/predictions/`, {
        match: currentMatch.match_info.match_id,
        prediction_type: 'winner',
        answer: team,
      });

      if (response.data.stats) {
        response.data.stats['1'] &&
          setMatchId(matchIde, '1', response.data.stats['1'] * 100);
        response.data.stats['2'] &&
          setMatchId(matchIde, '2', response.data.stats['2'] * 100);
      }
    } catch (error) {
      console.error('Can not get answer from server', error);
    }
  };

  const handleBothScore = async (matchIde: number, answer: ScoreType) => {
    if ((matchId['yes'] || matchId['no']) !== null) {
      return;
    }
    try {
      const response = await axios.post(`${BACKEND}/api/predictions/`, {
        match: currentMatch.match_info.match_id,
        prediction_type: 'both_score',
        answer: answer,
      });

      if (response.data.stats) {
        response.data.stats['yes'] &&
          setMatchId(matchIde, 'yes', response.data.stats['yes'] * 100);
        response.data.stats['no'] &&
          setMatchId(matchIde, 'no', response.data.stats['no'] * 100);
      }
    } catch (error) {}
  };

  const handleFirstScore = async (
    matchIde: number,
    answer: TeamType | 'without_heads'
  ) => {
    if ((matchId['1f'] || matchId['2f'] || matchId['wh']) !== null) {
      return;
    }
    try {
      const response = await axios.post(`${BACKEND}/api/predictions/`, {
        match: currentMatch.match_info.match_id,
        prediction_type: 'first_score',
        answer: answer,
      });

      if (response.data.stats) {
        response.data.stats[1] &&
          setMatchId(matchIde, '1f', response.data.stats[1] * 100);
        response.data.stats[2] &&
          setMatchId(matchIde, '2f', response.data.stats[2] * 100);
        response.data.stats.without_heads &&
          setMatchId(matchIde, 'wh', response.data.stats.without_heads * 100);
      }
    } catch (error) {}
  };

  const handleDraw = async (matchIde: number, answer: ScoreType) => {
    if ((matchId['yesD'] || matchId['noD']) !== null) {
      return;
    }

    try {
      const response = await axios.post(`${BACKEND}/api/predictions/`, {
        match: currentMatch.match_info.match_id,
        prediction_type: 'draw',
        answer: answer,
      });

      if (response.data.stats) {
        response.data.stats['yes'] &&
          setMatchId(matchIde, 'yesD', response.data.stats['yes'] * 100);
        response.data.stats['no'] &&
          setMatchId(matchIde, 'noD', response.data.stats['no'] * 100);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getMatchId(currentMatch.match_info.match_id);
  }, [useBettingStore]);

  return (
    <div className="m-auto mb-16 flex flex-wrap justify-center gap-4">
      <div className="relative flex h-33.5 w-[400px] flex-col justify-center rounded-xl bg-[var(--color-grey-60)] px-2.5 py-0">
        <p className="mb-1.5 text-center text-2xl font-normal text-[var(--color-grey-0)]">
          Who will win
        </p>
        {(matchId[1] || matchId[2]) !== null && (
          <p
            onClick={() => removeMatchId(currentMatch.match_info.match_id)}
            className="absolute top-2 right-2 underline"
          >
            Cancel
          </p>
        )}

        <div
          onClick={() => handlerWinner(currentMatch.match_info.match_id, '1')}
          className="flex w-full justify-center gap-1.5"
        >
          <div
            className="h-10 rounded-xl bg-[var(--color-secondary)]"
            style={{
              width: matchId[1] === null ? '100%' : `${matchId[1]}%`,
            }}
          >
            <p className="text-center leading-10 font-bold text-[var(--color-grey-60)]">
              {matchId[1] === null ? 1 : `${Math.round(matchId[1])}%`}
            </p>
          </div>

          <div
            onClick={() => handlerWinner(currentMatch.match_info.match_id, '2')}
            className="h-10 rounded-xl bg-[var(--color-primary)]"
            style={{
              width: matchId[2] === null ? '100%' : `${matchId[2]}%`,
            }}
          >
            <p className="w-full text-center leading-10 font-bold text-[var(--color-grey-60)]">
              {matchId[2] === null ? 2 : `${Math.round(matchId[2])}%`}
            </p>
          </div>
        </div>

        <p className="text-sm font-medium text-[var(--color-grey-0)]">
          Your prediction, your game - vote!
        </p>
      </div>

      <div className="relative flex h-33.5 w-[400px] flex-col justify-center rounded-xl bg-[var(--color-grey-60)] px-2.5 py-0">
        <p className="mb-1.5 text-center text-2xl font-normal text-[var(--color-grey-0)]">
          Will both teams score
        </p>

        {(matchId['yes'] || matchId['no']) !== null && (
          <p
            onClick={() => removeBothScore(currentMatch.match_info.match_id)}
            className="absolute top-2 right-2 underline"
          >
            Cancel
          </p>
        )}

        <div
          onClick={() =>
            handleBothScore(currentMatch.match_info.match_id, 'yes')
          }
          className="flex justify-center gap-1.5"
          style={{
            width: matchId['yes'] === null ? '100%' : `${matchId['yes']}%`,
          }}
        >
          <div className="h-10 w-full rounded-xl bg-[var(--color-secondary)]">
            <p className="text-center leading-10 font-bold text-[var(--color-grey-60)]">
              {matchId['yes'] === null
                ? 'Yes'
                : `${Math.round(matchId['yes'])}%`}
            </p>
          </div>

          <div
            onClick={() =>
              handleBothScore(currentMatch.match_info.match_id, 'no')
            }
            className="h-10 w-full rounded-xl bg-[var(--color-primary)]"
            style={{
              width: matchId['no'] === null ? '100%' : `${matchId['no']}%`,
            }}
          >
            <p className="text-center leading-10 font-bold text-[var(--color-grey-60)]">
              {matchId['no'] === null ? 'No' : `${Math.round(matchId['no'])}%`}
            </p>
          </div>
        </div>

        <p className="text-sm font-medium text-[var(--color-grey-0)]">
          Your prediction, your game - vote!
        </p>
      </div>

      <div className="relative flex h-33.5 w-[400px] flex-col justify-center rounded-xl bg-[var(--color-grey-60)] px-2.5 py-0">
        <p className="mb-1.5 text-center text-2xl font-normal text-[var(--color-grey-0)]">
          Who will score first
        </p>

        {(matchId['1f'] || matchId['2f']) !== null && (
          <p
            onClick={() => removeFirstScore(currentMatch.match_info.match_id)}
            className="absolute top-2 right-2 underline"
          >
            Cancel
          </p>
        )}

        <div className="flex justify-center gap-1.5">
          <div
            onClick={() =>
              handleFirstScore(currentMatch.match_info.match_id, '1')
            }
            className="h-10 w-full rounded-xl bg-[var(--color-secondary)]"
            style={{
              width: matchId['1f'] === null ? '100%' : `${matchId['1f']}%`,
            }}
          >
            <p className="text-center leading-10 font-bold text-[var(--color-grey-60)]">
              {matchId['1f'] === null ? 1 : `${Math.round(matchId['1f'])}%`}
            </p>
          </div>

          <div
            onClick={() =>
              handleFirstScore(
                currentMatch.match_info.match_id,
                'without_heads'
              )
            }
            className="h-10 w-full rounded-xl bg-[var(--color-grey-30)]"
            style={{
              width: matchId['wh'] === null ? '100%' : `${matchId['wh']}%`,
            }}
          >
            <p className="text-center leading-10 font-bold text-[var(--color-grey-60)]">
              {matchId['wh'] === null
                ? 'Withoutnheads'
                : `${Math.round(matchId['wh'])}%`}
            </p>
          </div>

          <div
            onClick={() =>
              handleFirstScore(currentMatch.match_info.match_id, '2')
            }
            className="h-10 w-full rounded-xl bg-[var(--color-primary)]"
            style={{
              width: matchId['2f'] === null ? '100%' : `${matchId['2f']}%`,
            }}
          >
            <p className="text-center leading-10 font-bold text-[var(--color-grey-60)]">
              {matchId['2f'] === null ? 2 : `${Math.round(matchId['2f'])}%`}
            </p>
          </div>
        </div>
        <p className="text-sm font-medium text-[var(--color-grey-0)]">
          Your prediction, your game - vote!
        </p>
      </div>

      <div className="relative flex h-33.5 w-[400px] flex-col justify-center rounded-xl bg-[var(--color-grey-60)] px-2.5 py-0">
        <p className="mb-1.5 text-center text-2xl font-normal text-[var(--color-grey-0)]">
          Will there be a draw
        </p>

        {(matchId['noD'] || matchId['yesD']) !== null && (
          <p
            onClick={() => removeDraw(currentMatch.match_info.match_id)}
            className="absolute top-2 right-2 underline"
          >
            Cancel
          </p>
        )}

        <div
          onClick={() => handleDraw(currentMatch.match_info.match_id, 'yes')}
          className="flex justify-center gap-1.5"
          style={{
            width: matchId['yesD'] === null ? '100%' : `${matchId['yesD']}%`,
          }}
        >
          <div className="h-10 w-full rounded-xl bg-[var(--color-secondary)]">
            <p className="text-center leading-10 font-bold text-[var(--color-grey-60)]">
              {matchId['yesD'] === null
                ? 'Yes'
                : `${Math.round(matchId['yesD'])}%`}
            </p>
          </div>

          <div
            onClick={() => handleDraw(currentMatch.match_info.match_id, 'no')}
            className="h-10 w-full rounded-xl bg-[var(--color-primary)]"
            style={{
              width: matchId['noD'] === null ? '100%' : `${matchId['noD']}%`,
            }}
          >
            <p className="text-center leading-10 font-bold text-[var(--color-grey-60)]">
              {matchId['noD'] === null
                ? 'No'
                : `${Math.round(matchId['noD'])}%`}
            </p>
          </div>
        </div>

        <p className="text-sm font-medium text-[var(--color-grey-0)]">
          Your prediction, your game - vote!
        </p>
      </div>
    </div>
  );
};
