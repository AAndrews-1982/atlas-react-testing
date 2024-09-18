import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import SongTitleComponent from '../components/SongTitle';
import { AppContextProvider } from '../components/AppContext';

const testContextData = {
    playlist: [
        { title: "Sample Song", artist: "Sample Artist", length: "03:00", artwork: "sample-cover.png" }
    ],
    activeTrack: 0,
    updateCurrentTrack: () => {}  // No-op function for testing
};

describe("SongTitleComponent Tests", () => {
    it("renders the SongTitle component and checks snapshot", () => {
        const view = render(
            <AppContextProvider value={testContextData}>
                <SongTitleComponent />
            </AppContextProvider>
        );

        expect(view.asFragment()).toMatchSnapshot();
    });
});
