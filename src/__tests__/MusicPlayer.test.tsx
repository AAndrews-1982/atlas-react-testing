import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import MusicPlayer from '../MusicPlayer';
import { server } from '../mocks/server';
import { rest } from 'msw';

test('renders mocked playlist data', async () => {
  render(<MusicPlayer />);

  // Verify the mock data is rendered
  await waitFor(() => {
    expect(screen.getByText('Fake Song 1')).toBeInTheDocument();
    expect(screen.getByText('Fake Song 2')).toBeInTheDocument();
  });
});

// Test for error handling
test('handles server error', async () => {
  // Override the handler to simulate an error
  server.use(
    rest.get('https://raw.githubusercontent.com/atlas-jswank/atlas-music-player-api/main/playlist', (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<MusicPlayer />);

  // Check if the error message is displayed
  await waitFor(() => {
    expect(screen.getByText(/error loading playlist/i)).toBeInTheDocument();
  });
});

// Test 3: Play button functionality
test('renders play button and interacts correctly', async () => {
  render(<MusicPlayer />);
  
  await waitFor(() => expect(screen.getByText('Fake Song 1')).toBeInTheDocument());

  const playButton = screen.getByRole('button', { name: /play/i });
  expect(playButton).toBeInTheDocument();

  fireEvent.click(playButton);
  expect(playButton).toHaveClass('playing'); // Adjust this based on actual implementation
});

// Test 4: Next button changes song
test('clicking next button changes the song', async () => {
  render(<MusicPlayer />);
  
  await waitFor(() => expect(screen.getByText('Fake Song 1')).toBeInTheDocument());

  const nextButton = screen.getByRole('button', { name: /forward/i });
  fireEvent.click(nextButton);

  await waitFor(() => expect(screen.getByText('Fake Song 2')).toBeInTheDocument());
});

// Test 5: Displays cover art for the current song
test('displays cover art for the current song', async () => {
  render(<MusicPlayer />);

  await waitFor(() => expect(screen.getByText('Fake Song 1')).toBeInTheDocument());

  const coverArt = screen.getByAltText('Cover Art');
  expect(coverArt).toBeInTheDocument();
  expect(coverArt).toHaveAttribute('src', '/path/to/placeholder-image.jpg'); // Adjust based on your actual image path
});
