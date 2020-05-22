import React from 'react'
import { Image } from 'semantic-ui-react'
import LazyLoad from 'react-lazyload'

function ImgView (props) {
  const { url } = props

  const filterUrl = () => {
    const array = url.split('/')
    return array[0] + '//' + array[2] + '/bdm' + '/640_395_85/' + array[5]
  }

  return (
    <>
      <LazyLoad throttle={200} height={300}>
        <Image onClick={ () => props.handleImgClick() } src={ filterUrl() }/>
      </LazyLoad>
    </>
  )
}

export default React.memo(ImgView)