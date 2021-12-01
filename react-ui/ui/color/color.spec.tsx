import React from 'react';
import { render } from '@testing-library/react';
import { BasicColor } from './color.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicColor />);
  const rendered = getByText('hello from Color');
  expect(rendered).toBeTruthy();
});
