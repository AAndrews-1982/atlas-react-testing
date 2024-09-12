import { rest } from 'msw';

// Mocking the playlist API endpoint
export const handlers = [
  rest.get('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: 'Fake Song 1',
          artist: 'Fake Artist 1',
          playtime: '3:45',
        },
        {
          id: 2,
          title: 'Fake Song 2',
          artist: 'Fake Artist 2',
          playtime: '4:20',
        },
      ])
    );
  }),
];
