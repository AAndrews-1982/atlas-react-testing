import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SongTitle from '../SongTitle';

describe('SongTitle Component', () => {
  it('should match snapshot with default song', () => {
    const { asFragment } = render(<SongTitle title="Default Title" artist="Default Artist" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with different title and artist', () => {
    const { asFragment } = render(<SongTitle title="New Title" artist="New Artist" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
