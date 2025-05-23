import axios from 'axios';
import { Match } from '../../types/countryMatchesTypes';
import { useEffect, useState } from 'react';
import { TeamType } from '../../types/teamTypes';
import { useBettingStore } from '../../zustand/useBetting';

type Props = {
  currentMatch: Match;
};

type MatchIdType = Record<'1' | '2', number | null>;

const BACKEND = import.meta.env.VITE_BACKEND_PEWNIACZKI;

export const CurrentDetails: React.FC<Props> = ({ currentMatch }) => {
  // const [winFirstTeam, setWinFirstTeam] = useState<null | number>(null);
  // const [winSecondTeam, setWinSecondTeam] = useState<null | number>(null);

  const { getMatchId, setMatchId, matchId } = useBettingStore();

  const handlerWinner = (matchIde: number, team: TeamType) => {
    try {
      const betWinner = async () => {
        if (matchId[1] !== null || matchId[2] !== null) {
          return;
        }

        const response = await axios.post(`${BACKEND}/api/predictions/`, {
          match: currentMatch.match_info.match_id,
          prediction_type: 'winner',
          answer: team,
        });

        if (response.data.stats) {
          response.data.stats['1'] &&
            // setWinFirstTeam(response.data.stats['1'] * 100);

            setMatchId(matchIde, '1', response.data.stats['1'] * 100);
          response.data.stats['2'] &&
            // setWinSecondTeam(response.data.stats['2'] * 100);
            setMatchId(matchIde, '2', response.data.stats['2'] * 100);
        }
      };
      betWinner();
      // console.log('winFirstTeam', winSecondTeam);
      // console.log('winSecondTeam', winSecondTeam);
    } catch (error) {
      console.error('Can not get answer from server', error);
    }
  };

  useEffect(() => {
    getMatchId(currentMatch.match_info.match_id);
  }, [currentMatch]);

  return (
    <div className="m-auto mb-16 flex flex-wrap justify-center gap-4">
      <div className="flex h-33.5 w-[400px] flex-col justify-center rounded-xl bg-[var(--color-grey-60)] px-2.5 py-0">
        <p className="mb-1.5 text-center text-2xl font-normal text-[var(--color-grey-0)]">
          Who will win
        </p>

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

      <div className="flex h-33.5 w-[400px] flex-col justify-center rounded-xl bg-[var(--color-grey-60)] px-2.5 py-0">
        <p className="mb-1.5 text-center text-2xl font-normal text-[var(--color-grey-0)]">
          Will both teams score
        </p>

        <div className="flex justify-center gap-1.5">
          <div className="h-10 w-full rounded-xl bg-[var(--color-secondary)]">
            <p className="text-center leading-10 font-bold text-[var(--color-grey-60)]">
              Yes
            </p>
          </div>

          <div className="h-10 w-full rounded-xl bg-[var(--color-primary)]">
            <p className="text-center leading-10 font-bold text-[var(--color-grey-60)]">
              No
            </p>
          </div>
        </div>

        <p className="text-sm font-medium text-[var(--color-grey-0)]">
          Your prediction, your game - vote!
        </p>
      </div>

      <div className="flex h-33.5 w-[400px] flex-col justify-center rounded-xl bg-[var(--color-grey-60)] px-2.5 py-0">
        <p className="mb-1.5 text-center text-2xl font-normal text-[var(--color-grey-0)]">
          Who will score first
        </p>

        <div className="flex justify-center gap-1.5">
          <div className="h-10 w-full rounded-xl bg-[var(--color-secondary)]">
            <p className="text-center leading-10 font-bold text-[var(--color-grey-60)]">
              1
            </p>
          </div>

          <div className="h-10 w-full rounded-xl bg-[var(--color-grey-30)]">
            <p className="text-center leading-10 font-bold text-[var(--color-grey-60)]">
              Withoutnheads
            </p>
          </div>

          <div className="h-10 w-full rounded-xl bg-[var(--color-primary)]">
            <p className="text-center leading-10 font-bold text-[var(--color-grey-60)]">
              2
            </p>
          </div>
        </div>
        <p className="text-sm font-medium text-[var(--color-grey-0)]">
          Your prediction, your game - vote!
        </p>
      </div>

      <div className="flex h-33.5 w-[400px] flex-col justify-center rounded-xl bg-[var(--color-grey-60)] px-2.5 py-0">
        <p className="mb-1.5 text-center text-2xl font-normal text-[var(--color-grey-0)]">
          Will there be a draw
        </p>

        <div className="flex justify-center gap-1.5">
          <div className="h-10 w-full rounded-xl bg-[var(--color-secondary)]">
            <p className="text-center leading-10 font-bold text-[var(--color-grey-60)]">
              Yes
            </p>
          </div>

          <div className="h-10 w-full rounded-xl bg-[var(--color-primary)]">
            <p className="text-center leading-10 font-bold text-[var(--color-grey-60)]">
              No
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
