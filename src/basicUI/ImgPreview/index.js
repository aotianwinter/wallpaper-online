import React from 'react'
import { Dimmer, Image, Button } from 'semantic-ui-react'

function ImgPreview (props) {
  const { url, utag } = props.previewImg

  return (
    <Dimmer active={ props.visible } onClickOutside={props.handleClick} page>
      <Image style={{ maxHeight: '90vh' }} src={ url } title={ utag } alt={ utag } />
    </Dimmer>
  )
}

export default React.memo(ImgPreview)