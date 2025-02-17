import { classNames } from "shared/lib/classNames"
import { useTheme, Theme } from "app/providers/ThemeProvider"
import LightThemeIcon from "shared/assets/icons/theme-light.svg"
import DarkThemeIcon from "shared/assets/icons/theme-dark.svg"
import { Button, ThemeButtom } from "shared/ui/Button/Button"

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme, theme } = useTheme()

  return (
    <Button
      theme={ThemeButtom.CLEAR}
      className={classNames("", {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <LightThemeIcon /> : <DarkThemeIcon />}
    </Button>
  )
}
