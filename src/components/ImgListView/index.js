import React, { useState, useEffect } from 'react'
import { Image, Transition } from 'semantic-ui-react'
import LazyLoad from 'react-lazyload'
import ImgView from '../../basicUI/ImgView'

function ImgListView (props) {
  const imgList = props.data

  return (
    imgList.length ? imgList.map((item) => {
      return (
        <div key={item.id}
          style={{ display: 'inline-block', width: '50%' }}
        >
          <LazyLoad throttle={200} height={300}>
            {/* <ImgView onClick={() => {console.log(111)}} url={item.url} /> */}
            {/* props.handleImgViewClick(item) */}
            <Image onClick={() => props.handleImgViewClick(item)}
              style={{ width: '100%' }} src={item.url}/>
          </LazyLoad>
        </div>
      )
    }) : null
  )
}

export default React.memo(ImgListView)