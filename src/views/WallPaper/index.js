import React, { useState, useEffect, createRef, useCallback } from 'react'
import { withRouter } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller'
import { Sticky } from 'semantic-ui-react'

// import BackTop from '../../basicUI/BackTop'
import MenuBar from '../../components/MenuBar'
import ImgListView from '../../basicUI/ImgListView'
import ImgPreview from '../../basicUI/ImgPreview'
import DownloadModal from '../../basicUI/DownloadModal'
import CustomPlaceholder from '../../basicUI/Placeholder'

import { getCategories, getPictureList } from '../../api/getData'

function PageWallPaper (props) {
  const [queryInfo, setQueryInfo] = useState({type: props.match.params.id || 5, start: 0, count: 30}) // query info
  const [isLoading, setIsLoading] = useState(true) // is loading img
  const [isPreview, setIsPreview] = useState(false) // is preview img
  const [isDownload, setIsDownload] = useState(false) // is download modal show
  const [isFinished, setIsFinished] = useState(false) // is all img loading finished

  const [currentImg, setCurrentImg] = useState({}) // current img info
  const [imgList, setImgList] = useState([])
  const [typeList, setTypeList] = useState([])

  const contextRef = createRef()

  useEffect(() => {
    getTypes()
  }, [])

  useEffect(() => {
    updateImgList()
  }, [queryInfo])

  const getTypes = async () => {
    const res = await getCategories()
    if (res.data) {
      setTypeList(res.data.data)
    }
  }
  // update img list
  const updateImgList = async () => {
    const res = await getPictureList({...queryInfo})
    if (res.data) {
      if (res.data.data.length === 0) {
        setIsFinished(true)
      } else {
        setImgList(imgList.concat(res.data.data))
      }
      setIsLoading(false)
    }
  }

  const changeImgType = (item) => {
    if (item.key !== queryInfo.type) {
      props.history.push('/wallpaper/' + item.key)
    }
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    // init state
    setImgList([])
    setIsLoading(true)
    setIsFinished(false)
    setQueryInfo({...queryInfo, type: item.key })
  }

  const loadMoreImgs = () => {
    setIsLoading(true)
    setQueryInfo({...queryInfo, start: queryInfo.start + queryInfo.count})
  }

  // cache memoized version of inline callback
  // click preview
  const handlePreviewImg = useCallback((img) => {
    setCurrentImg(img)
    setIsPreview(true)
  }, [])

  // click download
  const handleDownloadImg = useCallback((img) => {
    setCurrentImg(img)
    setIsDownload(true)
  }, [])

  // hide ImgPreview
  const hideImgPreview = useCallback(() => {
    setIsPreview(false)
  }, [])
  
  // hide DownloadModal
  const hideDownloadModal = useCallback(() => {
    setIsDownload(false)
  }, [])

  return (
    <div ref={contextRef}>
      {/* img type menu */}
      <Sticky context={contextRef} offset={48} styleElement={{ zIndex: '10' }}>
        <MenuBar onMenuClick={ changeImgType } data={typeList} />
      </Sticky>
      {/* loading img (infinity) */}
      <InfiniteScroll
        initialLoad
        pageStart={0}
        loadMore={ loadMoreImgs }
        hasMore={ !isLoading && !isFinished && imgList.length !== 0 }
        threshold={50}
      >
        <ImgListView
          handlePreview={ handlePreviewImg }
          handleDownload = { handleDownloadImg }
          data={ imgList }
          />
      </InfiniteScroll>
      { isLoading ? <CustomPlaceholder /> : null }
      { isFinished ? <h1 style={{ textAlign: 'center' }}>所有图片已加载完成！✨</h1> : null }
      {/* img preview */}
      <ImgPreview handleClick={ hideImgPreview } visible={ isPreview } previewImg={ currentImg } />
      {/* download options */}
      <DownloadModal onClose={ hideDownloadModal } visible={ isDownload } downloadImg={ currentImg } />
      {/* back to top */}
      {/* <BackTop /> */}
    </div>
  )
}

export default withRouter(React.memo(PageWallPaper))
