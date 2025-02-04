import './styles/index.scss'
import { classNames } from 'shared/lib/classNames'
import { useTheme } from './providers/ThemeProvider/lib/useTheme'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/NavBar'

const App = () => {
  const { toggleTheme, theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  )
}

export default App
