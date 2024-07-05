import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CounterTwo } from './CounterTwo'

describe('CounterTwo', () => {
  const mockIncrement = jest.fn();
  const mockDecrement = jest.fn();


  it('renders correctly', () => {
    render(<CounterTwo count={2}/>)
    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent('Counter Two');
    expect(screen.getByRole('paragraph')).toHaveTextContent('2');
  });

  it('renders correctly and should trigger a function onClick of Increment', async () => {
    render(<CounterTwo count={0} handleIncrement={mockIncrement} />)
    
    await userEvent.click(screen.getByRole('button', {name: /Increment/}));
    
    expect(mockIncrement).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('button', {name: /Decrement/})).not.toBeInTheDocument();
  });

  it('renders correctly and should trigger a function onClick of Decrement', async () => {
    render(<CounterTwo count={0} handleDecrement={mockDecrement} />)
    
    await userEvent.click(screen.getByRole('button', {name: /Decrement/}));

    expect(mockDecrement).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole('button', {name: /Increment/})).not.toBeInTheDocument();
  });

});

