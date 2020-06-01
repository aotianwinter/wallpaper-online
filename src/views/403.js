import React from 'react'
import Exception from '../components/Exception'

function Page403 () {
  return (
    <Exception type='403' />
  )
}

export default React.memo(Page403)