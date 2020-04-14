import React from "react"
import { Header } from 'semantic-ui-react'

function Footer () {
  return (
    <div style={{ background: 'black', paddingTop: '20vh' }}>
      <Header as='h1' style={{ textAlign: 'center', color: 'white' }}>
        The end.
      </Header>
    </div>
  )
}

export default React.memo(Footer)