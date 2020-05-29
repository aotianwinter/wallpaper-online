import React from 'react'
import { Image, Icon } from 'semantic-ui-react'
import { CSSTransition } from 'react-transition-group'
import LazyLoad from 'react-lazyload'
import { ImgWrap } from './style'
import './fade.css'

function ImgView (props) {
  const { url, tag } = props

  const filterUrl = () => {
    const array = url.split('/bdr/__85/')
    // 过滤url为低分辨率图片，防止加载时间较长
    return array.length !== 2 ? url : array[0] + '/bdm/640_395_85/' + array[1]
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
          <ImgWrap>
            <Image src={ filterUrl() } title={ tag } alt={ tag } />
            <div className='dim__wrap'>
              <Icon onClick={ () => props.onPreviewClick() } name='eye' color='orange' />
              <Icon onClick={ () => props.onDownloadClick() } name='download' color='teal' src={ filterUrl() } />
            </div>
          </ImgWrap>
        </CSSTransition>
      </LazyLoad>
    </>
  )
}

export default React.memo(ImgView)