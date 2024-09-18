import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import CoverArtComponent from '../components/CoverArt';
import { AppContextProvider } from '../components/AppContext';
import placeholderImage from '../assets/placeholder.svg';

describe("CoverArtComponent Rendering", () => {
    it("should display the CoverArt without crashing", () => {
        const view = render(
            <AppContextProvider>
                <CoverArtComponent />
            </AppContextProvider>
        );
        expect(view.container.firstChild).toBeDefined();
        expect(view).toMatchSnapshot();
    });
});
