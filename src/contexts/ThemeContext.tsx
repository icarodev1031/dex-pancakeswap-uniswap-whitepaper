import React, { useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { light, dark } from '@pancakeswap-libs/uikit'

const CACHE_KEY = 'IS_DARK'

const ThemeContext = React.createContext({ isDark: null, toggleTheme: () => null })

const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const isDarkUserSetting = localStorage.getItem(CACHE_KEY)
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : true
  })

  const toggleTheme = () => {
    setIsDark((prevState) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
      return !prevState
    })
  }
  const lightTheme = {
    ...light,
    button: {
      ...light.button,
      primary: {
        ...light.button.primary,
        background: '#36b54e',
        backgroundActive: '#36b54e',
        backgroundHover: '#36b54e',
      },
      text: {
        ...light.button.text,
        color: '#36b54e',
      },
      tertiary: {
        ...light.button.tertiary,
        color: '#36b54e',
      },
      secondary: {
        ...light.button.secondary,
        color: '#36b54e',
      },
      subtle: {
        ...light.button.subtle,
        background: '#36b54e',
        backgroundActive: '#36b54eD9',
        backgroundHover: '#36b54eB3',
      },
    },
    colors: {
      ...light.colors,
      primary: '#36b54e',
      primaryBright: '#36b54e',
      primaryDark: '#2f793e',
      textSubtle: '#36b54e',
      secondary: '#2f793e',
      text: '#206c2e',
    },
  }
  const darkTheme = {
    ...dark,
    button: {
      ...dark.button,
      primary: {
        ...dark.button.primary,
        background: '#36b54e',
        backgroundActive: '#36b54e',
        backgroundHover: '#36b54e',
      },
      text: {
        ...dark.button.text,
        color: '#36b54e',
      },
      tertiary: {
        ...dark.button.tertiary,
        color: '#36b54e',
      },
      secondary: {
        ...dark.button.secondary,
        color: '#36b54e',
      },
      subtle: {
        ...dark.button.subtle,
        background: '#36b54e',
        backgroundActive: '#36b54eD9',
        backgroundHover: '#36b54eB3',
      },
    },
    colors: {
      ...dark.colors,
      primary: '#36b54e',
      primaryBright: '#36b54e',
      primaryDark: '#2f793e',
      // textSubtle: '#36b54e',
      secondary: '#2f793e',
      // text: '#206c2e',
    },
  }
  console.log({ lightTheme, darkTheme })
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {/* <SCThemeProvider theme={lightTheme}>{children}</SCThemeProvider> */}
      <SCThemeProvider theme={isDark ? darkTheme : lightTheme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
