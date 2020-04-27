import React, { useState } from 'react'

function LayoutSwitch (props) {
  // console.log(LayoutSwitch.PC)
  // const temp = React.cloneElement(props.children[0], {
  //   name: 'PC'
  // })
  // console.log(temp)
  
  // control content slot
  const renderChild = (child) => {
  }

  return (
    <>
      { props.children }
    </>
  )
}

LayoutSwitch.PC = (props) => {
  // console.log(props)
  return (<>{props.children}</>)
}
LayoutSwitch.Pad = (props) => (<>{props.children}</>)
LayoutSwitch.Phone = (props) => (<>{props.children}</>)

// export default React.memo(LayoutSwitch)
export default LayoutSwitch
