import React from 'react'
import ImgView from '../../basicUI/ImgView'

function ImgListView (props) {
  const imgList = props.data

  return (
    imgList.length ? imgList.map((item) => {
      return (
        <div key={item.id}
          style={{ display: 'inline-block', width: '50%' }}
        >
          <ImgView handleImgClick={() => props.handleImgViewClick(item)} url={item.url} />
        </div>
      )
    }) : null
  )
}

export default React.memo(ImgListView)