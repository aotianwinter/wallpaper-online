import React from 'react'
import { FooterWrap } from './style'
import { Divider, Image, Label } from 'semantic-ui-react'

function Footer (props) {
  const { leftRow, centerRow, rightRow, author, copyright } = props.data
  console.log(leftRow)

  return (
    <FooterWrap>
      <div className='row-top'>
        <div className='col-left'>
          <Image src={ leftRow.icon } size='tiny' />
          <h1 className='title' style={{ marginTop: '10px' }}>{ leftRow.desc }</h1>
        </div>
        <div className='col-center'>
          <h1 className='title'>{ centerRow.title }</h1>
          <div className='links__wrap'>
            {
              centerRow.links.map((item, index) => {
                return <a href='#' key={index}>{ item.name }</a>
              })
            }
          </div>
        </div>
        <div className='col-right'>
          <h1 className='title'>{ rightRow.title }</h1>
          <div className='links__wrap'>
            {
              rightRow.links.map((item, index) => {
                return <a href='#' key={index}>{ item.name }</a>
              })
            }
          </div>
        </div>
      </div>
      <Divider />
      <div className='row-bottom'>
        <span style={{ marginRight: '4px' }}> Design By </span>
        <Label as='a' size='mini' image>
          <img src={ author.avatar } />
          { author.name }
        </Label>
        <p>{ copyright }</p>
      </div>
    </FooterWrap>
  )
}

export default React.memo(Footer)