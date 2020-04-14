import React from "react"
import { renderRoutes } from "react-router-config"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import headerConfig from "./init/headerConfig"

function BasicLayout (props) {
  const { route } = props
  
  return (
    <div>
      <Nav data={headerConfig}/>
      {/* 这是基础布局 */}
      <div style={{ minHeight: '80vh' }}>
        {renderRoutes(route.routes)}
      </div>
      <Footer/>
    </div>
  )
}

export default React.memo(BasicLayout)