import React, { useState, useEffect } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import PhoneNav from './PhoneNav'

function Nav (props) {
  const { titleIcon, titleText, textColor, activeColor, leftMenu, rightMenu } = props.data

  // 根据path获取activeItem
  const getActiveItemByPathName = (menus, pathname) => {
    for (let item of menus) {
      if (item.subitems && item.subitems.length > 0) {
        for (let i of item.subitems) {
          if (i.href === pathname) {
            return i.key
          }
        }
      }
      if (item.href === pathname) {
        return item.key
      }
    }
    // no match
    return ''
  }

  const selectActiveItem = () => {
    const pathname = props.location.pathname
    const val = getActiveItemByPathName(leftMenu, pathname)
    return val === '' ? getActiveItemByPathName(leftMenu, pathname) : val
  }

  const [activeItem, setActiveItem] = useState(selectActiveItem())
  const [phoneNavShow, setPhoneNavShow] = useState(false)

  const x = window.matchMedia('(max-width: 900px)')
  // 监听窗口变化 过窄收起侧边栏 过宽展开侧边栏
  const listenScreenWidth = (x) => {
    if (x.matches) { // 媒体查询
      setPhoneNavShow(false)
    } else {
      setPhoneNavShow(true)
    }
  }

  useEffect(() => {
    listenScreenWidth(x) // 执行时调用的监听函数
    x.addListener(listenScreenWidth) // 状态改变时添加监听器
    return () => {
      x.removeListener(listenScreenWidth) // 销毁时移除监听器
    }
  }, [x])

  const handleMenuClick = (menu) => {
    if (menu.externalLink) {
      window.open(menu.href)
    } else {
      setActiveItem(menu.key)
      props.history.push(menu.href)
    }
  }

  // 根据菜单配置信息遍历生成菜单组
  const menuView = (menus) => {
    return menus.map((item) => {
      return item.subitems && item.subitems.length ?
        (
        <Dropdown key={item.key} item text={item.title} style={{ color: textColor }}>
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
          style={{ color: textColor }}
          onClick={ () => handleMenuClick(item) }
        >
          { item.title }
        </Menu.Item>
      )
    })
  }

  return (
    <Menu size='huge' style={{ padding: '0 4%', background: 'black' }}
      color={ activeColor } pointing secondary
    >
      <Menu.Item header>
        <img style={{ height: '18px', width: '18px' }} src={ titleIcon } alt='icon' />
        <span style={{ color: 'white', marginLeft: '10px' }}>
          { titleText }
        </span>
      </Menu.Item>
      { phoneNavShow ? (
        <>
          <Menu.Menu position='left'>
            { menuView(leftMenu) }
          </Menu.Menu>
          <Menu.Menu position='right'>
            { menuView(rightMenu) }
          </Menu.Menu>
        </>
      ) : (
        <Menu.Menu position='right'>
          <Menu.Item>
            <PhoneNav data={props.data} handlePhoneNavClick={menu => handleMenuClick(menu)}></PhoneNav>
          </Menu.Item>
        </Menu.Menu>
        )
      }
    </Menu>
  )
}

export default withRouter(React.memo(Nav))