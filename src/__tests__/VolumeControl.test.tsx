// Imports for testing
import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { VolumeControl } from "../components/VolumeControl";
import { ContextProvider } from "../components/AppContext";

test("VolumeControl renders as expected", () => {
    // Render the VolumeControl component within the ContextProvider
    const { asFragment } = render(
        <ContextProvider>
            <VolumeControl />
        </ContextProvider>
    );

    // Compare the rendered output to the snapshot
    expect(asFragment()).toMatchSnapshot();
});
