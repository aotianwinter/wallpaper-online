import React from 'react'
import ImgView from '../ImgView'

function ImgListView (props) {
  const imgList = props.data

  return (
    imgList.length ? imgList.map((item) => {
      return (
        <div key={item.id}
          style={{ display: 'inline-block', width: '50%' }}
        >
          <ImgView 
            onPreviewClick={() => props.handlePreview(item)}
            onDownloadClick={() => props.handleDownload(item)}
            url={item.url} tag={ item.utag }
            />
        </div>
      )
    }) : null
  )
}

export default React.memo(ImgListView)