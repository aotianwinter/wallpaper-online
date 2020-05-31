import React, { createRef } from 'react'
import { Sticky, Ref } from 'semantic-ui-react'

const LeftStickyRow = (props) => (<>{props.children}</>)
const CenterRow = (props) => (<>{props.children}</>)
const RightRow = (props) => (<>{props.children}</>)

const ThreeRowLayout = (props) => {
  const { children } = props
  const contextRef = createRef()

  const autoSlot = (comp) => {
    // return children.map((item, index) => {
    //   if (item.type === comp) {
    //     return (<div key={index}>{item}</div>)
    //   }
    // })
    for (let index in children) {
      if (children[index].type === comp) {
        return (<div key={index}>{children[index]}</div>)
      }
    }
  }
  
  return (
    <div style={{ display: 'flex', margin: '20px 0' }}>
      <div style={{ width: '100px' }}>
        <Sticky context={contextRef} offset={0}>
          <div>{ autoSlot(LeftStickyRow) }</div>
        </Sticky>
      </div>
      <Ref innerRef={contextRef}>
        <div style={{ flex: '1' }}>
          { autoSlot(CenterRow) }
        </div>
      </Ref>
      {/* <div style={{ width: '100px' }}>
        { autoSlot(RightRow) }
      </div> */}
    </div>
  )
}

ThreeRowLayout.LeftStickyRow = LeftStickyRow
ThreeRowLayout.CenterRow = CenterRow
ThreeRowLayout.RightRow = RightRow

export default ThreeRowLayout