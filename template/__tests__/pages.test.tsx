import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Home from '@/app/page';

describe('Dashboards', () => {
  test('renders the title correctly', () => {
    render(<Home />);
    const titleElement = screen.getByText(/Faucet/i);
    expect(titleElement).toBeInTheDocument();
  });
});
