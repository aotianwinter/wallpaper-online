import React from 'react'
import { withRouter } from 'react-router-dom'
import { ExceptionWrap } from './style'
import { Button } from 'semantic-ui-react'
import types from './type'

function Exception (props) {
  const { type } = props

  return (
    <ExceptionWrap>
      <div className='img__wrap'>
        <div className="imgEle" style={{ backgroundImage: `url(${types[type].img})` }}>
        </div>
      </div>
      <div className='content__wrap'>
        <h1 className='title'>{ types[type].title }</h1>
        <div className="desc">{ types[type].desc }</div>
        <div className="action">
          <Button onClick={ () => props.history.push('/') }>返回首页</Button>
        </div>
      </div>
    </ExceptionWrap>
  )
}

export default withRouter(React.memo(Exception))