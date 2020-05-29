import React from 'react'
import Exception from '../components/Exception'

function Page404 () {
  return (
    <Exception type='404' />
  )
}

export default React.memo(Page404)
