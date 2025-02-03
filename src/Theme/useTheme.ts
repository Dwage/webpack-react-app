import { createHook } from 'async_hooks'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'
import { useContext } from 'react'

interface useThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    setTheme(newTheme)
  }

  return { toggleTheme, theme }
}
