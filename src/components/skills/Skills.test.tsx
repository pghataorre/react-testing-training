import { render, screen } from '@testing-library/react'
import { Skills } from './Skills'
import userEvent from '@testing-library/user-event';

describe('Skills', () => {
  const skills = ['React', 'TypeScript', 'Jest', 'React Testing Library'];


  it('should render a list of skills', () => {


    render(<Skills skills={skills} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(skills.length)
  });

  it('should render the correct skill in each list item', () => {

    render(<Skills skills={skills}/>);

    skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();

    })
  });

  it('should render correct button state on load', async() => {
    render(<Skills skills={skills}/>);

    const loginButton = screen.getByRole('button', {name: /Login/});
    expect(loginButton).toBeInTheDocument();
    expect(screen.queryByRole('button', {name: /Start learning/})).not.toBeInTheDocument();
  });

  it('should render correct button when login is pressed', async() => {
    render(<Skills skills={skills}/>);

    const loginButton = screen.getByRole('button', {name: /Login/});
    await userEvent.click(loginButton); 

    expect(screen.queryByRole('button', {name: /Login/})).not.toBeInTheDocument();
    expect(screen.getByRole('button', {name: /Start learning/})).toBeInTheDocument();
  });


  it('should render correct button after the setTimeOut reached', async () => {
    render(<Skills skills={skills}/>);

    // ----------------------------------------------
    // ----------------------------------------------
    // ----------------------------------------------
    
    // REALLY USEFUL FOR DEBUGGING
    // const testRender = render(<Skills skills={skills}/>);
    // logRoles(testRender.container);

    // ----------------------------------------------
    // ----------------------------------------------
    // ----------------------------------------------


    const startLearning = await screen.findByRole('button', {name: /Start learning/}, {timeout: 4000});
    expect(startLearning).toBeInTheDocument();
  });


  it('should show the default login button setTimeOut is reached', async () => {
    render(<Skills skills={skills}/>);

    try {
      await screen.findByRole('button', {name: /Start learning/}, {timeout: 1000});
    } catch (error) {
      expect(screen.getByRole('button', {name: /Login/})).toBeInTheDocument();
      expect(screen.queryByRole('button', {name: /Start learning/})).not.toBeInTheDocument();
    }
  });
});
