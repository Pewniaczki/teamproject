import { League } from '../../types/countyLeaguesTypes';

type Props = {
  league: League;
};

export const CountryLeague: React.FC<Props> = ({ league }) => {
  return (
    <div className="mt-2 cursor-pointer flex items-center gap-4 rounded bg-[var(--color-grey-60)] p-3 text-[var(--color-grey-20)] shadow transition hover:bg-gray-50 hover:text-[var(--color-grey-60)]">
      <img
        src={league.logo}
        alt={`${league.name} logo`}
        className="h-10 w-10 object-contain"
      />

      <div>
        <p className="font-semibold ">{league.name}</p>

        <p className="text-sm">{league.country}</p>
      </div>
    </div>
  );
};
