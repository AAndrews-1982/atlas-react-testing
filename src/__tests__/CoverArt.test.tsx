// Test for CoverArt

import { render } from '@testing-library/react';
import { ContextProvider } from "../components/AppContext";
import { expect, test } from 'vitest';
import { CoverArt } from '../components/CoverArt';
import placeholder from "../assets/placeholder.svg";

test("CoverArt renders correctly", () => {
    const {container} = render(
        <ContextProvider>
            <CoverArt />
        </ContextProvider>
    );
    expect(container).toMatchSnapshot();
});
