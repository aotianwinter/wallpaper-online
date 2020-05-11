import React, { useState } from 'react'
import { Button, Image, Transition } from 'semantic-ui-react'

function ImgView (props) {
  const { url } = props
  const [visible, setVisible] = useState(false)

  setTimeout(() => {
    setVisible(true)
  }, 100)

  return (
    <>
      <Transition visible={visible} animation='scale' duration={500}>
        <Image src={url}/>
      </Transition>
    </>
  )
}

export default React.memo(ImgView)