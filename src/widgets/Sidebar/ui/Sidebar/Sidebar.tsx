import { classNames } from 'shared/lib/classNames'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { BugButton } from 'app/providers/ErrorBoundary'
import classes from './Sidebar.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }

  return (
    <div
      className={classNames(
        classes.sidebar,
        { [classes.collapsed]: collapsed },
        [className]
      )}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={classes.collapseBtn}
        theme={ButtonTheme.BACKGROUND}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <BugButton />
      <div className={classes.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher className={classes.language} />
      </div>
    </div>
  )
}
