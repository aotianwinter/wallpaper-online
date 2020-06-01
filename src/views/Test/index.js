import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller'

import MenuBar from '../../components/MenuBar'
import ImgListView from '../../basicUI/ImgListView'
import ImgPreview from '../../basicUI/ImgPreview'
import DownloadModal from '../../basicUI/DownloadModal'
import CustomPlaceholder from '../../basicUI/Placeholder'

import { getCategories, getPictureList } from '../../api/getData'

function Test (props) {
  const [queryInfo, setQueryInfo] = useState({type: props.match.params.id || 5, start: 0, count: 30}) // query info
  const [isLoading, setIsLoading] = useState(true) // is loading
  const [isPreview, setIsPreview] = useState(false) // is preview
  const [isDownload, setIsDownload] = useState(false) // is download
  const [isFinished, setIsFinished] = useState(false) // is finished

  const [currentImg, setCurrentImg] = useState({}) // current img info
  const [imgList, setImgList] = useState([])
  const [typeList, setTypeList] = useState([])

  useEffect(() => {
    getTypes()
  }, [])


  useEffect(() => {
    console.log('queryInfo变动了')
    mergeData()
  }, [queryInfo])

  const getTypes = async () => {
    const res = await getCategories()
    let array = []
    // obj => array
    for (let index in res.data.data) {
      let temp = {}
      temp.key = res.data.data[index].id
      temp.title = res.data.data[index].name
      array.push(temp)
    }

    setTypeList(array)
  }

  const mergeData = async () => {
    console.log('mergeData')
    const res = await getPictureList({...queryInfo})
    if (res) {
      if (res.data.data.length === 0) {
        console.log('所有图片已加载完成！')
        setIsFinished(true)
      } else {
        setImgList(imgList.concat(res.data.data))
      }
      setIsLoading(false)
    }
  }
  // 点击预览
  const handlePreviewImg = (img) => {
    setCurrentImg(img)
    setIsPreview(true)
  }
  // 点击下载
  const handleDownloadImg = (img) => {
    setCurrentImg(img)
    setIsDownload(true)
  }

  const changeImgType = (item) => {
    if (item.key !== queryInfo.type) {
      props.history.push('/test/' + item.key)
    }
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    // 恢复初始状态
    setImgList([])
    setIsLoading(true)
    setIsFinished(false)
    setQueryInfo({...queryInfo, type: item.key, start: 0, count: 30})
  }

  const loadMoreImgs = () => {
    console.log('loadMoreImgs')
    setIsLoading(true)
    setQueryInfo({...queryInfo, start: queryInfo.start + queryInfo.count})
  }

  return (
    <>
      {/* 壁纸类型选择菜单 */}
      <MenuBar onMenuClick={item => changeImgType(item)} data={typeList} />
      {/* 加载壁纸 */}
      <InfiniteScroll
        initialLoad
        pageStart={0}
        loadMore={ () => loadMoreImgs() }
        hasMore={ !isLoading && !isFinished && imgList.length !== 0 }
        threshold={50}
      >
        <ImgListView
          handlePreview={ item => handlePreviewImg(item) }
          handleDownload = { item => handleDownloadImg(item) }
          data={ imgList }
          />
      </InfiniteScroll>
      { isLoading ? <CustomPlaceholder /> : null }
      { isFinished ? <h1 style={{ textAlign: 'center' }}>所有图片已加载完成！✨</h1> : null }
      {/* 预览图 */}
      <ImgPreview handleClick={ () => setIsPreview(false) } visible={ isPreview } previewImg={ currentImg } />
      {/* 下载选项 */}
      <DownloadModal onClose={ () => setIsDownload(false) } visible={ isDownload } downloadImg={ currentImg } />
    </>
  )
}

export default withRouter(React.memo(Test))
