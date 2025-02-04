import { classNames } from 'shared/lib/classNames'
import classes from './Button.module.scss'
import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

export enum ThemeButtom {
  CLEAR = 'clear',
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
}: ButtonProps) => {
  return (
    <button
      className={classNames(classes.button, {}, [className, classes[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  )
}
