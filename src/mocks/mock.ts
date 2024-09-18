import { setupServer } from 'msw/node';
import { rest } from 'msw';

// Mock data representing a sample tracklist
const mockTrackList = [
  {
    id: 101,
    title: 'Cerulean Dreams',
    artist: 'Blue Horizon',
    genre: 'Ambient',
    duration: '6:45',
    coverUrl: 'https://example-api/cover1',
  },
  {
    id: 102,
    title: 'Whispers in the Wind',
    artist: 'Nature Tones',
    genre: 'Chillout',
    duration: '7:30',
    coverUrl: 'https://example-api/cover2',
  },
];

// Handlers to simulate API responses
const mockApiHandlers = [
  rest.get('https://api.example.com/playlist', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockTrackList));
  }),
];

// Initialize and export the mock API server
export const mockServer = setupServer(...mockApiHandlers);
