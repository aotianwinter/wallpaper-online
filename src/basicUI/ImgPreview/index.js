import React from 'react'
import { Dimmer, Image, Button } from 'semantic-ui-react'
import { download } from './download'

function ImgPreview (props) {
  const { url, visible, tag } = props

  const handleDownload = (url) => {
    download(url, url)
  }

  return (
    <Dimmer active={ visible } onClickOutside={props.handleClick} page>
      <Image style={{ maxHeight: '90vh' }} src={url} title={ tag } alt={ tag } />
      <Button onClick={ () => handleDownload(url) } style={{ marginTop: '20px' }} circular color='green' icon='download' />
    </Dimmer>
  )
}

export default React.memo(ImgPreview)