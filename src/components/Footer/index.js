import React from 'react'
import { FooterWrap } from './style'
import { Divider, Image, Label } from 'semantic-ui-react'
import avatar from './dajiangyou.jpg'

function Footer () {
  return (
    <FooterWrap>
      <div className='row-top'>
        <div className='col-left'>
          <Image src={ require('./qrcode.png') } size='tiny'></Image>
          <h1 className='title' style={{ marginTop: '10px' }}>Preview</h1>
        </div>
        <div className='col-center'>
          <h1 className='title'>文档链接</h1>
          <div className='item__wrap'>
            <p>React 官方文档</p>
            <p>Semantic UI</p>
            <p>Node</p>
          </div>
        </div>
        <div className='col-right'>
          <h1 className='title'>相关链接</h1>
          <div className='item__wrap'>
            <p>GitHub</p>
            <p>掘金</p>
            <p>简书</p>
          </div>
        </div>
      </div>
      <Divider />
      <div className='row-bottom'>
        <span style={{ marginRight: '4px' }}> Design By </span>
        <Label as='a' size='mini' image>
          <img src={avatar} />
          打酱油
        </Label>
        <p>copyright©2020</p>
      </div>
    </FooterWrap>
  )
}

export default React.memo(Footer)