import React, { createRef } from 'react'
import { renderRoutes } from 'react-router-config'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Sticky } from 'semantic-ui-react'
import navConfig from '../config/nav'
import footerConfig from '../config/footer'

function BasicLayout (props) {
  const contextRef = createRef()
  const { route } = props
  
  return (
    <div ref={contextRef}>
      <Sticky context={contextRef}>
        <Nav data={ navConfig }/>
      </Sticky>
      <div style={{ minHeight: '80vh' }}>
        {renderRoutes(route.routes)}
      </div>
      <Footer data={ footerConfig }/>
    </div>
  )
}

export default React.memo(BasicLayout)