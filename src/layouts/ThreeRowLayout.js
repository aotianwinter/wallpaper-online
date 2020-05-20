import React, { createRef } from 'react'
import { Sticky, Ref, Segment, Grid } from 'semantic-ui-react'

const LeftStickyRow = (props) => (<>{props.children}</>)
const CenterRow = (props) => (<>{props.children}</>)
const RightRow = (props) => (<>{props.children}</>)

const ThreeRowLayout = (props) => {
  const { children } = props
  const contextRef = createRef()

  const autoSlot = (comp) => {
    return children.map((item, index) => {
      if (item.type === comp) {
        return (<div key={index}>{item}</div>)
      }
    })
  }
  
  return (
    <Grid style={{ margin: '20px 0' }}>
      <Grid.Column>
        <Sticky context={contextRef} offset={100}>
          <div>{ autoSlot(LeftStickyRow) }</div>
        </Sticky>
      </Grid.Column>
      <Grid.Column width={ 12 }>
        <Ref innerRef={contextRef}>
        <div>
          { autoSlot(CenterRow) }
        </div>
        </Ref>
      </Grid.Column>
      <Grid.Column>
        { autoSlot(RightRow) }
      </Grid.Column>
    </Grid>
  )
}

ThreeRowLayout.LeftStickyRow = LeftStickyRow
ThreeRowLayout.CenterRow = CenterRow
ThreeRowLayout.RightRow = RightRow

export default ThreeRowLayout