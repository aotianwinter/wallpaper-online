import React from 'react'
import { Menu } from 'semantic-ui-react'
// TODO item.key作为key提示重复，待解决
function VerticalSidebar (props) {
  return (
    <Menu pointing secondary vertical compact style={{ width: '120px' }}>
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
    </Menu>
  )
}

export default React.memo(VerticalSidebar)
