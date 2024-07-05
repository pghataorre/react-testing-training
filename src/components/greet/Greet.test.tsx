import { render, screen } from '@testing-library/react'
import { Greet } from './Greet'

describe('Greet', () => {
  it('should render component with no parameters passed in and show the correct text', () => {
    render(<Greet />)
    expect(screen.getByText(/Hello Guest/)).toBeInTheDocument();
  });

  it('should render component when a parameters passed in and show the correct text', () => {
    render(<Greet name="Permy"/>)
    expect(screen.getByText(/Hello Permy/)).toBeInTheDocument();
  });
});
