// Test for SongTitle Component

// Imports
import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { SongTitle } from "../components/SongTitle";
import { AppContext } from "../components/AppContext";

// Mock Context Provider Data
const mockContextValue = {
  songs: [
    { title: "Test Song", artist: "Test Artist", duration: "3:00", cover: "cover1.png" }
  ],
  currentSong: 0,
  setCurrentSong: () => {} // Mock function
};

test("SongTitle renders correctly", () => {
  const { asFragment } = render(
    <AppContext.Provider value={mockContextValue}>
      <SongTitle />
    </AppContext.Provider>
  );

  // Correctly call toMatchSnapshot() on asFragment
  expect(asFragment()).toMatchSnapshot();
});
