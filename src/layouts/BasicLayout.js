import React, { createRef } from 'react'
import { renderRoutes } from 'react-router-config'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import navConfig from '../config/nav'
import { Sticky } from 'semantic-ui-react'

function BasicLayout (props) {
  const contextRef = createRef()
  const { route } = props
  
  return (
    <div ref={contextRef}>
      <Sticky context={contextRef}>
        <Nav data={navConfig}/>
      </Sticky>
      {/* 这是基础布局 */}
      <div style={{ minHeight: '80vh' }}>
        {renderRoutes(route.routes)}
      </div>
      <Footer/>
    </div>
  )
}

export default React.memo(BasicLayout)