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

// type Match = {
//   competition: string;
//   match_info: {
//     match_id: number;
//     home_team: string;
//     away_team: string;
//     home_team_logo: string;
//     away_team_logo: string;
//     home_team_last_five_results: string[];
//     away_team_last_five_results: string;
//     home_wins_probability: number;
//     away_wins_probability: number;
//     home_score: number;
//     away_score: number;
//     date_time: string;
//     status: string;
//   };
// };


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
