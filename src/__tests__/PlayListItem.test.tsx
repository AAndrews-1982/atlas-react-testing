import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import PlaylistItemComponent from '../components/PlayListItem';
import { AppContextProvider } from '../components/AppContext';
import mockCover1 from '../assets/cover1.png';
import mockCover2 from '../assets/cover2.png';

const fakeSongData = [
    { title: "Sample Song 1", artist: "Artist One", time: "03:00", artwork: mockCover1 },
    { title: "Sample Song 2", artist: "Artist Two", time: "04:00", artwork: mockCover2 }
];

const fakeContext = {
    songs: fakeSongData,
    activeSongIndex: 0,
    changeCurrentSong: vi.fn()
};

describe("PlaylistItemComponent Rendering", () => {
    it("renders a PlayListItem and validates the snapshot", () => {
        const result = render(
            <AppContextProvider value={fakeContext}>
                <PlaylistItemComponent 
                    songTitle={fakeSongData[0].title} 
                    artist={fakeSongData[0].artist} 
                    playTime={fakeSongData[0].time} 
                />
            </AppContextProvider>
        );

        expect(result.asFragment()).toMatchSnapshot();
    });
});
