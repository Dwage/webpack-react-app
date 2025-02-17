import { classNames } from 'shared/lib/classNames'
import { ButtonHTMLAttributes, FC } from 'react'
import classes from './Button.module.scss'

export enum ThemeButtom {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButtom
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
