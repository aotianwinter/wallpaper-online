import React from 'react'
import { Header, Label } from 'semantic-ui-react'
import { PageAboutWrap } from './style'
import avatar from '../../assets/author.jpg'

function PageAbout (props) {
  return (
    <PageAboutWrap>
      <Header as='h1'>Resources are for learning only, not for commercial use.</Header>
      <Header as='h3'>If you like this web, please click star in my github! Thank you!😘</Header>
      <Label as='a' size='large' image>
        <img src={avatar} alt='author avatar' />打酱油
      </Label>
    </PageAboutWrap>
  )
}

export default React.memo(PageAbout)