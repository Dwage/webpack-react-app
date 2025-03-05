import { classNames } from 'shared/lib/classNames'
import { ButtonHTMLAttributes, FC } from 'react'
import classes from './Button.module.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme,
  ...otherProps
}: ButtonProps) => (
  <button
    type="button"
    className={classNames(classes.button, {}, [className, classes[theme]])}
    {...otherProps}
  >
    {children}
  </button>
)
