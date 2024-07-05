import { logRoles, render, screen } from '@testing-library/react'
import { Counter } from './Counter'
import userEvent from '@testing-library/user-event';

describe('Counter', () => {
  it('should render the component with a default count of 0', () => {
    render(<Counter />)
    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent('0');
    expect(screen.getByRole('button', {name: /Increment/})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: /Set/})).toBeInTheDocument();
  });

  it('should add 1 when Clicking increment', async() => {
    render(<Counter />)

    await userEvent.click(screen.getByRole('button', {name: /Increment/}));
    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent('1');
    expect(screen.getByRole('button', {name: /Set/})).toBeInTheDocument();
  });

  it('should render correct number when an input is typed and Set Button is pressed', async() => {
    render(<Counter />);
    
    await userEvent.type(screen.getByRole('spinbutton'), '1');
    await userEvent.click(screen.getByRole('button', {name: /Set/}))

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent('1');
    expect(screen.getByRole('button', {name: /Set/})).toBeInTheDocument();
  });

  it('should render change counter USING TABBING  into', async() => {
    render(<Counter />);
    const inputTextField = screen.getByRole('spinbutton');

    await userEvent.tab();
    await userEvent.tab();
    await userEvent.type(inputTextField, '10');
    await userEvent.tab();
    await userEvent.click(screen.getByRole('button', {name: /Set/})); 

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent('10');
  });


  it('should focus on the correct Elements when TABBING', async() => {
    render(<Counter />);
    const inputField = screen.getByRole('spinbutton');

    await userEvent.tab();
    expect(screen.getByRole('button', {name: /Increment/})).toHaveFocus();

    await userEvent.tab();
    expect(inputField).toHaveFocus();
    expect(inputField).toHaveDisplayValue('0');
    
    await userEvent.tab();
    expect((screen.getByRole('button', {name: /Set/}))).toHaveFocus();
  });
});
