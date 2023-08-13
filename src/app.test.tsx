import { render, screen } from '@testing-library/react';
import { App } from './app';

describe('Component | App', () => {
  it('should render the app component', async () => {
    render(<App />);
    expect(screen.getByText('Rendered from react app')).toBeInTheDocument();
  });
});
