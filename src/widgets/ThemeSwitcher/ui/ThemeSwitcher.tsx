import { classNames } from 'shared/lib/classNames'
import classes from './ThemeSwitcher.module.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import LightThemeIcon from 'shared/assets/icons/theme-light.svg'
import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg'
import { Theme } from 'app/providers/ThemeProvider'
import { Button, ThemeButtom } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = useTheme()

  return (
    <Button
      theme={ThemeButtom.CLEAR}
      className={classNames(classes.button, null, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <LightThemeIcon /> : <DarkThemeIcon />}
    </Button>
  )
}
