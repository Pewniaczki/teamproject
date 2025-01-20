export type Result = {
  id: number;
  result: 'loose' | 'win' | 'draw';
};

export type Match = {
  time: string;
  teamA: {
    teamLogo: string;
    teamName: string;
    winTime: number;
    last5Matches: Result[];
    mid: number;
  };
  teamB: {
    teamLogo: string;
    teamName: string;
    winTime: number;
    last5Matches: Result[];
    mid: number;
  };
};

export type League = {
  leagueLogo: string;
  leagueName: string;
  matches: Match[];
};

export type CountryMatchesType = {
  countryFlag: string;
  countryName: string;
  leagues: League[];
};
