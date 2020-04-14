import React, { lazy, Suspense } from 'react'
import { Redirect } from 'react-router-dom'
import BlankLayout from '../layouts/BlankLayout'
import BasicLayout from '../layouts/BasicLayout'

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

const PageTest = lazy(() => import('../views/Test'))
const Page404 = lazy(() => import('../views/404'))
const PageAbout = lazy(() => import('../views/About'))

export default [
  {
    component: BlankLayout,
    routes: [
      {
        path: "/",
        component: BasicLayout,
        routes: [
          {
            path: "/",
            exact: true,
            render: () => <Redirect to={"/test"} />
          },
          {
            path: "/test/:id",
            exact: true,
            component: SuspenseComponent(PageTest)
          },
          {
            path: "/about",
            exact: true,
            component: SuspenseComponent(PageAbout)
          },
          {
            path: "/*",
            exact: true,
            component: SuspenseComponent(Page404)
          }
        ]
      }
    ]
  }
]