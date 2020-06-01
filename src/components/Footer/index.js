import React from 'react'
import { FooterWrap } from './style'
import { Divider, Image, Label } from 'semantic-ui-react'

function Footer (props) {
  const { leftRow, centerRow, rightRow, author, copyright } = props.data
  
  // 根据row配置信息遍历生成
  const rowView = (row) => {
    return (
      <>
        <h1 className='title'>{ row.title }</h1>
        <div className='links__wrap'>
          {
            row.links.length > 0 ?
              row.links.map((item, index) => {
                return <a href={ `${ item.href }` } target='_blank' rel='noopener noreferrer' key={index}>{ item.name }</a>
              }) : null
          }
        </div>
      </>
    )
  }

  return (
    <FooterWrap>
      <div className='row-top'>
        <div className='col-left'>
          <Image src={ leftRow.icon } size='tiny' />
          <h1 className='title' style={{ marginTop: '10px' }}>{ leftRow.desc }</h1>
        </div>
        <div className='col-center'>
          { rowView(centerRow) }
        </div>
        <div className='col-right'>
          { rowView(rightRow) }
        </div>
      </div>
      <Divider />
      <div className='row-bottom'>
        <span style={{ marginRight: '4px' }}> Design By </span>
        <Label as='a' size='mini' image>
          <img src={ author.avatar } alt='author avatar' />
          { author.name }
        </Label>
        <p>{ copyright }</p>
      </div>
    </FooterWrap>
  )
}

export default React.memo(Footer)