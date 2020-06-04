import React from 'react'
import { Menu } from 'semantic-ui-react'

function MenuBar (props) {
  return (
    <>
      {
        props.data.length ?
          <Menu secondary compact size='mini' style={{ background: 'white', width: '100%', overflow: 'auto' }}>
            {
              props.data.map((item, index) => {
                return (
                  <Menu.Item onClick={() => props.onMenuClick(item)} key={index}>
                    {item.title}
                  </Menu.Item>
                )
              })
            }
          </Menu> : null
      }
    </>
  )
}

export default React.memo(MenuBar)
