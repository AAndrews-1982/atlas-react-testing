import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PlayListItem from '../PlayListItem';

describe('PlayListItem Component', () => {
  it('should match snapshot with default props', () => {
    const { asFragment } = render(<PlayListItem title="Song Title" artist="Artist Name" playtime="3:45" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with different props', () => {
    const { asFragment } = render(<PlayListItem title="Another Song" artist="Another Artist" playtime="4:30" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
