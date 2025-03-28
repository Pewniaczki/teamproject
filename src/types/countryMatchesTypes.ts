export type Result = {
  id: number;
  result: 'loose' | 'win' | 'draw';
};

export type Match = {
  competition: string;
  country: string;
  match_info: {
    match_id: number;
    home_team: string;
    away_team: string;
    home_team_logo: string;
    away_team_logo: string;
    home_team_last_five_results: string[];
    away_team_last_five_results: string;
    home_wins_probability: number;
    away_wins_probability: number;
    home_score: number;
    away_score: number;
    date_time: string;
    status: string;
  };
};

export type CurrentMatchType = {
  teams: [
    { name: string; icon: string },
    { name: string; icon: string },
  ];
  time: string;
  day: 'Today' | 'Tomorrow';
};
