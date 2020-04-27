import React from 'react'
import { Dimmer, Image } from 'semantic-ui-react'

function ImgPreview (props) {
  const { url, visible } = props

  return (
    <Dimmer active={ visible } onClick={props.handleClick} page>
      {/* 123123123 */}
      <Image size="huge" src={url}></Image>
    </Dimmer>
  )
}

export default React.memo(ImgPreview)