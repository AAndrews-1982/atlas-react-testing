import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import VolumeControlComponent from '../components/VolumeControl';
import { AppContextProvider } from '../components/AppContext';

describe("VolumeControlComponent Snapshot Test", () => {
    it("renders VolumeControl and matches snapshot", () => {
        const renderedOutput = render(
            <AppContextProvider>
                <VolumeControlComponent />
            </AppContextProvider>
        );

        expect(renderedOutput.asFragment()).toMatchSnapshot();
    });
});
