import React, { useState } from 'react'

const Pad = (props) => (<div className='aaa'>{props.children}</div>)
function LayoutSwitch (props) {
  console.log(props.content)
  // const temp = React.cloneElement(props.children[0], {
  //   name: 'PC'
  // })
  const { children, content, className } = props
  console.log(children, content, className)
  
  // control content slot
  const renderChild = (child) => {
  }

  return (
    <>
      <Pad>
        {/* { props.children }  */}
      </Pad>
    </>
  )
}

LayoutSwitch.PC = (props) => {
  // console.log(props)
  return (<>{props.children}</>)
}
LayoutSwitch.Pad = Pad
LayoutSwitch.Phone = (props) => (<>{props.children}</>)

// export default React.memo(LayoutSwitch)
export default LayoutSwitch
