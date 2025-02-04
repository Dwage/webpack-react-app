import React, { Suspense } from 'react'
import { Routes, Route, RouteProps } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map((route: RouteProps) => (
          <Route
            path={route.path}
            element={<div className="page-wrapper">{route.element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  )
}

export default AppRouter
