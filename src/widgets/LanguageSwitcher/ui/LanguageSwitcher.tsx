import { classNames } from 'shared/lib/classNames'
import classes from './LanguageSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButtom } from 'shared/ui/Button/Button'

interface LanguageSwitcherProps {
  className?: string
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames(classes.languageSwitcher, {}, [className])}
      theme={ThemeButtom.CLEAR}
      onClick={toggleLanguage}
    >
      {t('language')}
    </Button>
  )
}
