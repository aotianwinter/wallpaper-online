import React from 'react'
import { Header, Label } from 'semantic-ui-react'
import avatar from '../../assets/dajiangyou.jpg'

function PageAbout (props) {
  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      <Header as='h1'>Resources are for learning only, not for commercial use.</Header>
      <Label as='a' size='large' image>
        <img src={avatar} />
        打酱油
      </Label>
    </div>
  )
}

export default React.memo(PageAbout)