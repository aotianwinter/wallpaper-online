import React from 'react'
import { renderRoutes } from 'react-router-config'

const BlankLayout = ({route}) => {
  return (
    <>{renderRoutes(route.routes)}</>
  )
}

export default React.memo(BlankLayout)