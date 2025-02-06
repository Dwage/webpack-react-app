import { classNames } from 'shared/lib/classNames'
import { Button } from 'shared/ui/Button/Button'
import classes from './PageError.module.scss'

interface PageErrorProps {
  className?: string
}

const reloadPage = () => {
  // eslint-disable-next-line no-restricted-globals
  location.reload()
}

export const PageError = ({ className }: PageErrorProps) => (
  <div className={classNames(classes.pageError, {}, [className])}>
    <p>An unexpected error occurred</p>
    <Button onClick={reloadPage}>Reload page</Button>
  </div>
)
