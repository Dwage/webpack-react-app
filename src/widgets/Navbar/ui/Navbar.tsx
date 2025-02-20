import { classNames } from 'shared/lib/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import classes from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(classes.navbar, {}, [className])}>
    <div className={classes.links}>
      <AppLink theme={AppLinkTheme.INVERTED} to="/">
        Main
      </AppLink>
      <AppLink theme={AppLinkTheme.INVERTED} to="/about">
        About
      </AppLink>
    </div>
  </div>
)
