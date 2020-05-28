import React, { useState } from 'react'
import { Button, Modal, Label, Icon, Header, List } from 'semantic-ui-react'
import { download } from './download'
import downloadOptions from '../../config/download_options'

function DownloadModal (props) {
  const { url, utag } = props.downloadImg

  const handleDownload = (param) => {
    const array = url.split('/')
    const downloadUrl = array[0] + '//' + array[2] + param + array[5]
    download(downloadUrl, utag + '.' + array[5].split('.')[1])
  }

  return (
    <Modal basic dimmer={ 'blurring' } open={ props.visible }>
      <Header icon='browser' content='download options' />
      <Modal.Content>
      <List verticalAlign='middle'>
        { downloadOptions.length > 0
          ? downloadOptions.map((item, index) => {
          return (
            <List.Item key={ index }>
              <List.Content floated='right'>
                <Button onClick={ () => handleDownload(item.filterParam) }
                  basic color='green' icon='download' inverted size='mini' />
              </List.Content>
              <List.Content>
                <Label>{ item.desc }</Label>
              </List.Content>
            </List.Item>
          )
        }) : null }
      </List>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={ () => props.onClose() } color='green' inverted>
          OK
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default React.memo(DownloadModal)
