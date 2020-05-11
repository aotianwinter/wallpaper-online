import React, { useState, useEffect } from 'react'

const PC = (props) => (<>这是PC:{props.children}</>)
const Pad = (props) => (<>这是Pad:{props.children}</>)
const Phone = (props) => (<>这是Phone:{props.children}</>)

function LayoutSwitch (props) {
  const { children } = props

  const [currentLayout, setCurrentLayout] = useState('pc') // 默认布局PC

  const pcLayout = window.matchMedia('(max-width: 1200px)')
  const padLayout = window.matchMedia('(max-width: 900)')
  const phoneLayout = window.matchMedia('(max-width: 768px)')

  // 监听窗口变化
  const listenScreenWidth = (layout, layoutType) => {
    if (!layout.matches) { // 大于媒体查询宽度
      setCurrentLayout(layoutType)
    }
  }

  useEffect(() => {
    listenScreenWidth(pcLayout, 'pcLayout') // 执行时调用的监听函数
    // listenScreenWidth(padLayout, 'padLayout') // 执行时调用的监听函数
    // listenScreenWidth(phoneLayout, 'phoneLayout') // 执行时调用的监听函数
    pcLayout.addListener(listenScreenWidth) // 状态改变时添加监听器
    // padLayout.addListener(listenScreenWidth) // 状态改变时添加监听器
    // phoneLayout.addListener(listenScreenWidth) // 状态改变时添加监听器
    return () => {
      pcLayout.removeListener(listenScreenWidth)
      // pcLayout.removeListener(listenScreenWidth)
      // pcLayout.removeListener(listenScreenWidth)
    }
  }, [])
  
  // control content slot
  const renderChild = (child) => {
  }

  const autoSlot = () => {
    return children.map((item, index) => {
      // return (<>{item}</>)
      if (item.type === PC) {
        // console.log(item)
        return (<div key={index}>{item}</div>)
      }
    })
  }

  return (
    <div>
      {/* { children[0] } */}
      {
        children instanceof Array ? autoSlot() : children
      }
    </div>
  )
}

LayoutSwitch.PC = PC
LayoutSwitch.Pad = Pad
LayoutSwitch.Phone = Phone

// export default React.memo(LayoutSwitch)
export default LayoutSwitch
