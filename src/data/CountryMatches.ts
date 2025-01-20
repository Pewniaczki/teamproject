import { CountryMatchesType } from '../types/countryMatchesTypes';

export const countryMatches: CountryMatchesType[] = [
  {
    countryFlag:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1920px-Flag_of_France.svg.png',
    countryName: 'France',
    leagues: [
      {
        leagueLogo:
          'https://as2.ftcdn.net/v2/jpg/01/79/98/27/1000_F_179982790_MWtmi0ZL8WKwxWoFTKXA2GKDaYAmbiwn.jpg',
        leagueName: 'La liga',
        matches: [
          {
            time: '2025-01-20T15:30:00Z',
            teamA: {
              teamLogo:
                'https://as2.ftcdn.net/v2/jpg/03/88/06/65/1000_F_388066567_zfxDezwtCp4w1ppG0baC0oxn5kw0L5NA.jpg',
              teamName: 'PSG',
              winTime: 65,
              last5Matches: [
                { id: 26, result: 'loose' },
                { id: 27, result: 'draw' },
                { id: 28, result: 'draw' },
                { id: 29, result: 'win' },
                { id: 30, result: 'win' },
              ],
              mid: 1,
            },
            teamB: {
              teamLogo:
                'https://as1.ftcdn.net/v2/jpg/11/85/79/42/1000_F_1185794224_Vam0ur8hA1OkGEvZAi6GqiURn26tM2Dm.jpg',
              teamName: 'Olympique Lyonnais',
              winTime: 45,
              last5Matches: [
                { id: 21, result: 'loose' },
                { id: 22, result: 'win' },
                { id: 23, result: 'draw' },
                { id: 24, result: 'win' },
                { id: 25, result: 'draw' },
              ],
              mid: 2,
            },
          },
        ],
      },
    ],
  },
  {
    countryFlag:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1920px-Flag_of_the_United_Kingdom_%281-2%29.svg.png',
    countryName: 'United Kingdom',
    leagues: [
      {
        leagueLogo:
          'https://as1.ftcdn.net/v2/jpg/00/66/91/64/1000_F_66916464_mi8oPNGEANMq6kyxOBXfF96FWsc864sj.jpg',
        leagueName: 'Premier League',
        matches: [
          {
            time: '2025-01-21T18:00:00Z',
            teamA: {
              teamLogo:
                'https://as1.ftcdn.net/v2/jpg/11/75/16/92/1000_F_1175169270_7oSyrEGbjrkgRG8CYU3bGLYg1XOJVus7.jpg',
              teamName: 'Manchester City',
              winTime: 70,
              last5Matches: [
                { id: 16, result: 'win' },
                { id: 17, result: 'win' },
                { id: 18, result: 'win' },
                { id: 19, result: 'win' },
                { id: 20, result: 'win' },
              ],
              mid: 3,
            },
            teamB: {
              teamLogo:
                'https://as2.ftcdn.net/v2/jpg/11/75/16/93/1000_F_1175169394_YGv4dAQ8Jp8cmxDx9J1w6nWSHyPxrleN.jpg',
              teamName: 'Arsenal',
              winTime: 60,
              last5Matches: [
                { id: 11, result: 'win' },
                { id: 12, result: 'win' },
                { id: 13, result: 'draw' },
                { id: 14, result: 'loose' },
                { id: 15, result: 'draw' },
              ],
              mid: 4,
            },
          },
        ],
      },
    ],
  },
  {
    countryFlag:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png',
    countryName: 'Brazil',
    leagues: [
      {
        leagueLogo:
          'https://as1.ftcdn.net/v2/jpg/10/98/66/94/1000_F_1098669400_CafCLGm0FMOJESmgPhVXyCdZ278fECPa.webp',
        leagueName: 'Serie A',
        matches: [
          {
            time: '2025-01-22T20:00:00Z',
            teamA: {
              teamLogo:
                'https://as1.ftcdn.net/v2/jpg/11/75/16/96/1000_F_1175169613_tD0kqQRvQ9zbM8qM9Meq8Pt2pP7S150b.jpg',
              teamName: 'Flamengo',
              winTime: 75,
              last5Matches: [
                { id: 6, result: 'win' },
                { id: 7, result: 'win' },
                { id: 8, result: 'win' },
                { id: 9, result: 'win' },
                { id: 10, result: 'draw' },
              ],
              mid: 5,
            },
            teamB: {
              teamLogo:
                'https://as1.ftcdn.net/v2/jpg/11/75/16/96/1000_F_1175169666_AgAyIq5JpMQ4cWJJMILocKtZKqlcnX0P.jpg',
              teamName: 'Palmeiras',
              winTime: 55,
              last5Matches: [
                { id: 1, result: 'draw' },
                { id: 2, result: 'loose' },
                { id: 3, result: 'win' },
                { id: 4, result: 'win' },
                { id: 5, result: 'win' },
              ],
              mid: 6,
            },
          },
        ],
      },
    ],
  },
];
