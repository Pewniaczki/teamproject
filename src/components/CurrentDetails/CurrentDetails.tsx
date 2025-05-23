import axios from 'axios';
import { Match } from '../../types/countryMatchesTypes';
import { useState } from 'react';

type Props = {
  currentMatch: Match;
};

type TeamType = '1' | '2';

const BACKEND = import.meta.env.VITE_BACKEND_PEWNIACZKI;

export const CurrentDetails: React.FC<Props> = ({ currentMatch }) => {
  const [winFirstTeam, setWinFirstTeam] = useState<null | number>(null);
  const [winSecondTeam, setWinSecondTeam] = useState<null | number>(null);

  const handlerWinner = (team: TeamType) => {
    try {
      const betWinner = async () => {
        const response = await axios.post(`${BACKEND}/api/predictions/`, {
          match: currentMatch.match_info.match_id,
          prediction_type: 'winner',
          answer: team,
        });

        if (response.data.stats) {
          response.data.stats['1'] &&
            setWinFirstTeam(response.data.stats['1'] * 100);
          response.data.stats['2'] &&
            setWinSecondTeam(response.data.stats['2'] * 100);
        }
      };
      betWinner();
      console.log('winFirstTeam', winSecondTeam);
      console.log('winSecondTeam', winSecondTeam);
    } catch (error) {
      console.error('Can not get answer from server', error);
    }
  };

  return (
    <div className="m-auto mb-16 flex flex-wrap justify-center gap-4">
      <div className="flex h-33.5 w-[400px] flex-col justify-center rounded-xl bg-[var(--color-grey-60)] px-2.5 py-0">
        <p className="mb-1.5 text-center text-2xl font-normal text-[var(--color-grey-0)]">
          Who will win
        </p>

        <div
          onClick={() => handlerWinner('1')}
          className="flex w-full justify-center gap-1.5"
        >
          <div
            className='h-10 rounded-xl bg-[var(--color-secondary)]'
            style={{
              width: winFirstTeam === null ? '100%' : `${winFirstTeam}%`,
            }}
          >
            <p className="text-center leading-10 font-bold text-[var(--color-grey-60)]">
              {winFirstTeam === null ? 1 : `${winFirstTeam}%`}
            </p>
          </div>

          <div
            onClick={() => handlerWinner('2')}
            className='h-10 rounded-xl bg-[var(--color-primary)]'
            style={{
              width: winSecondTeam === null ? '100%' : `${winSecondTeam}%`,
            }}
          >
            <p className="w-full text-center leading-10 font-bold text-[var(--color-grey-60)]">
              {winSecondTeam === null ? 2 : `${winSecondTeam}%`}
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
