import { Suspense } from 'react'
import { Routes, Route, RouteProps } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
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
