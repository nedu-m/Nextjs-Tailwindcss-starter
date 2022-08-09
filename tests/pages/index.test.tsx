import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@pages/index';

describe('Home', () => {
  it('should render', () => {
    render(<Home />);

    expect(
      screen.getByText('Nextjs + TypeScript + Tailwindcss Starter')
    ).toBeInTheDocument();
  });
});
