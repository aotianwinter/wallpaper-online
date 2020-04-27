import React from 'react'
import { Sidebar, Menu } from 'semantic-ui-react'
// TODO item.key作为key提示重复，待解决

function VerticalSidebar (props) {
  return (
    <Sidebar
      as={Menu}
      animation='push'
      direction='left'
      icon='labeled'
      inverted
      vertical
      visible={props.visible}
      width='thin'
    >
      {
        props.data.length ?
          props.data.map((item, index) => {
            return (
              <Menu.Item onClick={() => props.handleClick(item)} key={index}>
                {item.title}
              </Menu.Item>
            )
          }) : null
      }
    </Sidebar>
  )
}

export default React.memo(VerticalSidebar)