import { Suspense } from 'react'
import { Routes, Route, RouteProps } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {Object.values(routeConfig).map((route: RouteProps) => (
        <Route
          key={route.path}
          path={route.path}
          element={<div className="page-wrapper">{route.element}</div>}
        />
      ))}
    </Routes>
  </Suspense>
)

export default AppRouter
