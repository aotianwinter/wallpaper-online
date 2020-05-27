import React from 'react'
import { Image } from 'semantic-ui-react'
import { CSSTransition } from 'react-transition-group'
import LazyLoad from 'react-lazyload'
import './fade.css'

function ImgView (props) {
  const { url, tag } = props

  const filterUrl = () => {
    const array = url.split('/')
    // 过滤url为低分辨率图片，防止加载时间较长
    return array[0] + '//' + array[2] + '/bdm/640_395_85/' + array[5]
  }

  return (
    <>
      <LazyLoad throttle={200} height={'100%'} offset={200}>
        <CSSTransition
          in={true}
          classNames={'fade'}
          appear={true}
          key={1}
          timeout={300}
          unmountOnExit={true}
          >
          <Image onClick={ () => props.handleImgClick() } src={ filterUrl() } title={ tag } alt={ tag } />
        </CSSTransition>
      </LazyLoad>
    </>
  )
}

export default React.memo(ImgView)