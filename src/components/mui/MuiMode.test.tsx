import { render, screen } from '../../test-utils'
import { MuiMode } from './MuiMode';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';;

describe('MuiMode', () => {
  const renderComponent = (theme) => {
    render(
      <ThemeProvider theme={theme} >
        <MuiMode />
      </ThemeProvider> 
    )
  }

  it('should render text as Dark mode', () => {
    const mockDarkTheme = createTheme({
      palette: {
        mode: 'dark',  
      },
    })

    renderComponent({mockDarkTheme})
    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(/dark mode/);
  })

  it('renders text in white color for dark mode', () => {
    const mockDarkTheme = createTheme({
      palette: {
        mode: 'dark',  
      },
    })

    renderComponent({mockDarkTheme})
    expect(screen.getByRole('heading')).toHaveStyle({ color: '"rgb(255, 255, 255)"'})
  })


  // it('should render text for light mode', () => {
  //   const mockLighttttTheme = createTheme({
  //     palette: {
  //       mode: 'light',  
  //     },
  //   })

  //   renderComponent({mockLighttttTheme})
  //   expect(screen.getByRole('heading', {level: 1})).toHaveTextContent('light mode');
  // })

  it('renders text in white color for light mode', () => {
    const mockLightTheme = createTheme({
      palette: {
        mode: 'light',  
      },
    })

    renderComponent({mockLightTheme})
    expect(screen.getByRole('heading')).toHaveStyle({ color: '"rgb(0, 0, 0)"'})
  })


})
