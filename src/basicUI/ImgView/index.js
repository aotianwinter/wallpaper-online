import React, { useState } from 'react'
import { Dimmer, Image, Transition } from 'semantic-ui-react'

function ImgView (props) {
  const { url } = props.data
  // const [visible, setVisible] = useState(false)

  return (
    // <Transition visible={visible} animation='scale' duration={500}>
      <Image onClick={ props.handleClick } src={url}/>
    // </Transition>
  )
}

export default React.memo(ImgView)