// Import necessary modules and components
import { render } from "@testing-library/react";
import { PlayListItem } from "../components/PlayListItem";
import { AppContext } from "../components/AppContext";
import { expect, it, vi } from "vitest";

// Define mock data for the context
const mockSongs = [
  { title: "Test Song 1", artist: "Test Artist 1", duration: "3:00", cover: "cover1.png" },
  { title: "Test Song 2", artist: "Test Artist 2", duration: "4:00", cover: "cover2.png" }
];

const mockContextValue = {
  songs: mockSongs,
  currentSong: 0,
  setCurrentSong: vi.fn()
};

it("should render the PlayListItem component and match the snapshot", () => {
  const { asFragment } = render(
    <AppContext.Provider value={mockContextValue}>
      <PlayListItem songTitle={mockSongs[0].title} artist={mockSongs[0].artist} playTime={mockSongs[0].duration} />
    </AppContext.Provider>
  );

  // Verify that the rendered output matches the snapshot
  expect(asFragment()).toMatchSnapshot();
});
