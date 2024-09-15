// src/mocks.ts
import { setupServer } from 'msw/node';
import { rest } from 'msw';

// Define mock data for the playlist
const playlistData = [
  {
    id: 1,
    title: 'Painted in Blue',
    artist: 'Soul Canvas',
    genre: 'Soul',
    duration: '5:55',
    cover: 'https://example-api',
  },
  {
    id: 2,
    title: 'Tidal Drift',
    artist: 'Echoes of the Sea',
    genre: 'Mood',
    duration: '8:02',
    cover: 'https://example-api',
  },
];

// Mock API handler for playlist endpoint
const handlers = [
  rest.get(
    'https://example.api',
    (req, res, ctx) => {
      return res(ctx.json(playlistData));
    }
  ),
];

// Set up and export the mock server
export const server = setupServer(...handlers);
