import { classNames } from 'shared/lib/classNames'
import { FC, ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import classes from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  children?: ReactNode;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherprops
  } = props

  return (
    <Link
      to={to}
      className={classNames(classes.AppLink, {}, [className, classes[theme]])}
      {...otherprops}
    >
      {children}
    </Link>
  )
}
