import React, { useState, useCallback } from 'react'
import { Image, Icon } from 'semantic-ui-react'
import { CSSTransition } from 'react-transition-group'
import { ImgWrap } from './style'
import loadingImg from './loading.gif'
import './fade.css'

function ImgView (props) {
  const { url, tag } = props

  const [isLoaded, setIsLoaded] = useState(false)

  // cache memoized version of inline callback
  const handleLoaded = useCallback(() => {
    setIsLoaded(true)
  }, [])

  const filterUrl = () => {
    const array = url.split('/bdr/__85/')
    // 过滤url为低分辨率图片，防止加载时间较长
    return array.length !== 2 ? url : array[0] + '/bdm/640_360_85/' + array[1]
  }

  // 正式Image未加载之前没有高度信息
  return (
    <ImgWrap>
      <Image hidden={ isLoaded } className='img-placeholder' src={ loadingImg } rounded />
      <CSSTransition
        in={true}
        classNames={'fade'}
        appear={true}
        key={1}
        timeout={300}
        unmountOnExit={true}
        >
        <Image onLoad={ handleLoaded } style={{ opacity: isLoaded ? 1 : 0 }}
          src={ filterUrl() } title={ tag } alt={ tag } rounded />
      </CSSTransition>
      <div className='dim__wrap'>
        <span className='tag'>{ tag }</span>
        <Icon onClick={ () => props.onPreviewClick() } name='eye' color='orange' />
        <Icon onClick={ () => props.onDownloadClick() } name='download' color='teal' src={ filterUrl() } />
      </div>
    </ImgWrap>
  )
}

export default React.memo(ImgView)