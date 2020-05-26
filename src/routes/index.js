import React, { lazy, Suspense } from 'react'
import { Redirect } from 'react-router-dom'
import BlankLayout from '../layouts/BlankLayout'
import BasicLayout from '../layouts/BasicLayout'
import { Dimmer, Loader } from 'semantic-ui-react'

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={ <Dimmer active><Loader /></Dimmer> }>
      <Component {...props}></Component>
    </Suspense>
  )
}

const PageTest = lazy(() => import('../views/Test'))
const PageAbout = lazy(() => import('../views/About'))
const Page404 = lazy(() => import('../views/404'))

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