import React from 'react'
import { Button, Modal, Label, Header, List } from 'semantic-ui-react'
import { download } from './download'
import downloadOptions from '../../config/download_options'

function DownloadModal (props) {
  const { url, utag } = props.downloadImg

  const handleDownload = (param) => {
    // Safari Tip
    if (/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent)) {
      alert('抱歉😅！暂不支持Safari下载！请手动保存照片！')
      return
    }
    const array = url.split('/bdr/__85/')
    array.length === 2 ? download(array[0] + param + array[1], utag + '.jpg') : download(url, utag + '.jpg')
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
