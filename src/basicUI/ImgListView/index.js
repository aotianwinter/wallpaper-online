import React from 'react'
import ImgView from '../ImgView'
import { ImgViewWrap } from './style'
import LazyLoad from 'react-lazyload'

function ImgListView (props) {
  const imgList = props.data

  const width = (1 / Math.ceil(window.screen.width / 360) * 100) + '%'

  return (
    <>
      {
        imgList.length > 0 ? imgList.map((item) => {
          return (
            <ImgViewWrap key={item.id} width={ width }>
              <LazyLoad height={'100%'} offset={200} >
                <ImgView
                  key={item.id}
                  onPreviewClick={() => props.handlePreview(item)}
                  onDownloadClick={() => props.handleDownload(item)}
                  url={item.url} tag={ item.utag }
                  />
              </LazyLoad>
            </ImgViewWrap>
          )
        }) : null
      }
    </>
  )
}

export default React.memo(ImgListView)