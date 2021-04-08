import React from 'react'
import { Menu } from 'semantic-ui-react'

function MenuBar (props) {
  const menus = []
  for (let i in props.data) {
    menus.push(props.data[i])
  }

  return (
    <>
      {
        menus.length ?
          <Menu secondary compact size='mini' style={{ background: 'white', width: '100%', overflow: 'auto' }}>
            {
              menus.map((item, index) => {
                return (
                  <Menu.Item onClick={() => props.onMenuClick(item.id)} key={index}>
                    {item.name}
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
