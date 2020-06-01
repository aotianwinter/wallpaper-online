import React from 'react'
import Exception from '../components/Exception'

function Page500 () {
  return (
    <Exception type='500' />
  )
}

export default React.memo(Page500)