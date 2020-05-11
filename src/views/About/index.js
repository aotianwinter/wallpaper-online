import React from 'react'
import { Header, Label } from 'semantic-ui-react'
import avatar from '../../assets/dajiangyou.jpg'
import LayoutSwitch from '../../basicUI/LayoutSwitch'

function PageAbout (props) {
  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      <Header as='h1'>Resources are for learning only, not for commercial use.</Header>
      <Label as='a' size='large' image>
        <img src={avatar} />
        打酱油
      </Label>
      <LayoutSwitch>
        <LayoutSwitch.PC>
          <p>PC</p>
          <p>PC</p>
          <p>PC</p>
        </LayoutSwitch.PC>
        <LayoutSwitch.Pad>
          <p>Pad</p>
          <p>Pad</p>
        </LayoutSwitch.Pad>
        <LayoutSwitch.Phone>
          <p>Phone</p>
        </LayoutSwitch.Phone>
      </LayoutSwitch>
    </div>
  )
}

export default React.memo(PageAbout)