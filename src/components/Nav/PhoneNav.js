import React, { useState, useRef } from 'react'
import { PhoneNavBt, PhoneNavWrapper } from './style'
import { Icon, Menu, Accordion } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

function PhoneNav (props) {
  const wrapperRef = useRef(null)
  const [activeIndex, setActiveItem] = useState('')

  const showPhoneNavWrapper = () => {
    let emList = document.getElementsByTagName('em')
    const wrapper = wrapperRef.current
    if (wrapper.style.opacity === '1') {
      // document.documentElement.style.overflowY = ''
      wrapper.style.zIndex = '-1'
      wrapper.style.opacity = '0'
      // setMenuList([])
      emList[0].style.transform = ''
      emList[1].style.transition = 'all 0.5s ease 0.2s'
      emList[1].style.opacity = '1'
      emList[2].style.transform = ''
    } else {
      // document.documentElement.style.overflowY = 'hidden'
      wrapper.style.zIndex = '1000'
      wrapper.style.opacity = '1'
      // setMenuList([...props.menuList])
      emList[0].style.transform = 'translate(0px,6px) rotate(45deg)'
      emList[1].style.opacity = '0'
      emList[1].style.transition = ''
      emList[2].style.transform = 'translate(0px,-6px) rotate(-45deg)'
    }
  }

  const handleMenuClick = (menu) => {
    // setActiveItem(menu.key)
    props.history.push(menu.href)
    const wrapper = wrapperRef.current
    let emList = document.getElementsByTagName('em')
    wrapper.style.zIndex = '-1'
    wrapper.style.opacity = '0'
    // setMenuList([])
    emList[0].style.transform = ''
    emList[1].style.transition = 'all 0.5s ease 0.2s'
    emList[1].style.opacity = '1'
    emList[2].style.transform = ''

  }

  const menuView = (menus) => {
    return menus.map((item) => {
      return item.subitems && item.subitems.length ?
        (
          <Accordion key={item.key} styled inverted style={{ background: 'black', width: '100%'}}>
            <Accordion.Title
              as={Menu.Header}
              active={activeIndex === item.key}
              index={0}
              onClick={() => setActiveItem(activeIndex === item.key ? '-1' : item.key)}
            >
              <Icon name='dropdown' />
              { item.title }
            </Accordion.Title>
            {
              item.subitems.map((i) => {
                return (
                  <Accordion.Content style={{padding: '0px'}} key={i.key} active={activeIndex === item.key}>
                    <Menu.Item style={{ paddingLeft: '3rem', color: props.data.textColor, background: '#1B1C1D' }} onClick={() => handleMenuClick(item) }>
                      { item.title }
                    </Menu.Item>
                  </Accordion.Content>
                )
              })
            }
          </Accordion>
        )
      :
      (
        <Menu.Item style={{ color: props.data.textColor }} onClick={() => handleMenuClick(item) } key={item.key}>
          { item.title }
        </Menu.Item>
      )
    })
  }

  return (
    <>
      <PhoneNavBt onClick={showPhoneNavWrapper}>
        <em></em>
        <em></em>
        <em></em>
      </PhoneNavBt>
      <PhoneNavWrapper ref={wrapperRef}>
        <Menu style={{ width: '100%' }} inverted size='huge' vertical>
          { menuView(props.data.leftMenu) }
          { menuView(props.data.rightMenu) }
        </Menu>
      </PhoneNavWrapper>
    </>
  )
}

export default withRouter(React.memo(PhoneNav))