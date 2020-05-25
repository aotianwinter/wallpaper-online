import React from 'react'
import { Image, Placeholder } from 'semantic-ui-react'
import LazyLoad from 'react-lazyload'
import { CSSTransition } from 'react-transition-group'
import './a.css'

function ImgView (props) {
  const { url } = props

  const filterUrl = () => {
    const array = url.split('/')
    // 过滤url为低分辨率图片，防止加载时间较长
    return array[0] + '//' + array[2] + '/bdm' + '/640_395_85/' + array[5]
  }

  const a = (
    <Placeholder>
    <Placeholder.Header>
      <Placeholder.Line length='very short' />
      <Placeholder.Line length='medium' />
    </Placeholder.Header>
    <Placeholder.Paragraph>
      <Placeholder.Line length='short' />
    </Placeholder.Paragraph>
  </Placeholder>
  )

  return (
    <>
      <LazyLoad throttle={200} height={'100%'} placeholder={ <Placeholder></Placeholder>} offset={200}>
        <CSSTransition
          in={true}
          classNames={'fade'}
          appear={true}
          key={1}
          timeout={300}
          unmountOnExit={true}
          >
          <Image onClick={ () => props.handleImgClick() } src={ filterUrl() } />
        </CSSTransition>
      </LazyLoad>
    </>
  )
}

export default React.memo(ImgView)