import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CoverArt from '../CoverArt';

describe('CoverArt Component', () => {
  it('should match snapshot with default props', () => {
    const { asFragment } = render(<CoverArt />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should match snapshot with custom props', () => {
    const { asFragment } = render(<CoverArt imageUrl="custom-image-url" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
