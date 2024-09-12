import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import VolumeControl from '../VolumeControl';

describe('VolumeControl Component', () => {
  it('should match snapshot with default volume', () => {
    const { asFragment } = render(<VolumeControl />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with custom volume level', () => {
    const { asFragment } = render(<VolumeControl volume={0.5} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
