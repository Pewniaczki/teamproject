export type TeamTypes = {
        team_id: 33,
        last_five_matches: [
            {
                home_team: string,
                home_team_logo: string,
                home_score: 0,
                away_team: string,
                away_team_logo: string,
                away_score: 2,
                date_and_time: string
            },
        ],
        code: string,
        name: string,
        logo: string,
        league: number,
        country: string
    }

    export type TeamType = '1' | '2';

