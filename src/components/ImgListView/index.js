import React, { useState, useEffect } from 'react'
import { Image } from 'semantic-ui-react'

function ImgListView (props) {
  const imgList = props.data

  return (
    imgList.length ? imgList.map((item) => {
      return (
        <div key={item.id}
          style={{ display: 'inline-block', width: '100%' }}
        >
          <Image onClick={() => props.handleImgViewClick(item)}
            style={{ width: '100%' }} src={item.url}/>
          {/* <ImgView handleClick={() => setPreview(item)} data={item}></ImgView> */}
        </div>
      )
    }) : null
  )
}

export default React.memo(ImgListView)