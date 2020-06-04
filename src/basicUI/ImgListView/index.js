import React from 'react'
import LazyLoad from 'react-lazyload'
import ImgView from '../ImgView'
import { ImgListViewWrap, ImgViewWrap } from './style'

function ImgListView (props) {
  const imgList = props.data

  const width = (1 / (document.body.clientWidth / 360) * document.body.clientWidth).toFixed(3)
  const height = (width * 0.5625).toFixed(3)

  return (
    <ImgListViewWrap>
      {
        imgList.length > 0 ? imgList.map((item) => {
          return (
            <ImgViewWrap key={item.id} width={ width + 'px' } height={ height + 'px' }>
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
    </ImgListViewWrap>
  )
}

export default React.memo(ImgListView)