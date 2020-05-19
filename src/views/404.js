import React from 'react'
import { Header } from 'semantic-ui-react'

function Page404 () {
  return (
    <div>
      <Header as='h1'>404！</Header>
    </div>
  )
}

export default React.memo(Page404)
