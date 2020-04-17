import React, { useState, useEffect } from 'react'
import { Dimmer, Image, Transition } from 'semantic-ui-react'

function ImgPreview (props) {
  const { url, visible } = props

  return (
    <Dimmer active={ visible } onClick={props.handleClick}  page>
      <Image size="huge" src={url}></Image>
    </Dimmer>
  )
}

export default React.memo(ImgPreview)