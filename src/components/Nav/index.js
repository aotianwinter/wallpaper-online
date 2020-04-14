import React, { useState } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import PhoneNav from './PhoneNav'

function Nav (props) {
  const [activeItem, setActiveItem] = useState(props.data.activeItem)
  // const [activeItem, setActiveItem] = useState(props.data.activeItem)

  const handleMenuClick = (menu) => {
    setActiveItem(menu.key)
    props.history.push(menu.href)
  }

  const menuView = (menus) => {
    return menus.map((item) => {
      return item.subitems && item.subitems.length ?
        (
        <Dropdown key={item.key} item text={item.title} style={{ color: props.data.textColor }}>
          <Dropdown.Menu>
            {
              item.subitems.map((i) => {
                return (
                  <Dropdown.Item onClick={ () => handleMenuClick(i) } key={i.key}>
                    {i.title}
                  </Dropdown.Item>
                )
              })
            }
          </Dropdown.Menu>
        </Dropdown>
      ) :
      (
        <Menu.Item key={item.key}
          active={activeItem === item.key}
          style={{ color: props.data.textColor }}
          onClick={ () => handleMenuClick(item) }
        >
          { item.title }
        </Menu.Item>
      )
    })
  }

  return (
    <Menu style={{ padding: '0 4%', background: 'black' }}
      color={props.data.activeColor} pointing secondary
    >
      <Menu.Item header>
        {/* <img style={{ height: '18px', width: '18px' }} 
          src={props.data.titleIcon}/> */}
        <span style={{ color: 'white', marginLeft: '10px' }}>
          { props.data.titleText }
        </span>
      </Menu.Item>
      <Menu.Menu position='left'>
        { menuView(props.data.leftMenu) }
      </Menu.Menu>
      <Menu.Menu position='right'>
        { menuView(props.data.rightMenu) }
        <Menu.Item>
          <PhoneNav>
            <em></em>
            <em></em>
            <em></em>
          </PhoneNav>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default withRouter(React.memo(Nav))