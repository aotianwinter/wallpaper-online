import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller'
import { Placeholder, Transition, Button } from 'semantic-ui-react'

import VerticalSidebar from '../../components/Sidebar'
import ImgListView from '../../basicUI/ImgListView'
import ImgPreview from '../../basicUI/ImgPreview'
import DownloadModal from '../../basicUI/DownloadModal'
import ThreeRowLayout from '../../layouts/ThreeRowLayout'

import { getCategories, getPictureList } from '../../api/getData'

function Test (props) {
  const [queryInfo, setQueryInfo] = useState({type: props.match.params.id || 5, start: 0, count: 30}) // query info
  const [isLoading, setIsLoading] = useState(true) // is loading
  const [isPreview, setIsPreview] = useState(false) // is preview
  const [isDownload, setIsDownload] = useState(false) // is download

  const [currentImg, setCurrentImg] = useState({}) // current img info
  const [imgList, setImgList] = useState([])
  const [typeList, setTypeList] = useState([])
  const [sidebarShow, setSidebarShow] = useState(false) // is sidebar visible

  useEffect(() => {
    console.log(111)
  })

  //  TODO 节流实现图片请求获取
  useEffect(() => {
    getTypes()
    // getData()
  }, [])

  useEffect(() => {
    if (imgList.length) {
      mergeData()
    } else {
      getData()
    }
  }, [queryInfo])

  const getTypes = async () => {
    const res = await getCategories()
    let array = []
    // 过滤限时壁纸
    Object.keys(res.data.data).map((i) => {
      if (res.data.data[i].id !== '1') {
        let temp = {}
        temp.key = res.data.data[i].id
        temp.title = res.data.data[i].name
        array.push(temp)
      }
    })
    setTypeList(array)
  }

  const getData = async () => {
    const res = await getPictureList({...queryInfo})
    if (res) {
      setImgList(res.data.data)
      setIsLoading(false)
    }
  }

  const mergeData = async () => {
    const res = await getPictureList({...queryInfo})
    if (res) {
      setImgList(imgList.concat(res.data.data))
      setIsLoading(false)
    }
  }
  // 点击预览
  const handlePreviewImg = (img) => {
    setCurrentImg(img)
    setIsPreview(true)
    // if (isPreview) {
    //   setPreviewImg({})
    //   setIsPreview(false)
    // } else {
    //   setPreviewImg(img)
    //   setIsPreview(true)
    // }
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
    setImgList([])
    setQueryInfo({...queryInfo, type: item.key, start: 0, count: 30})
  }

  const loadMoreImgs = () => {
    setIsLoading(true)
    setQueryInfo({...queryInfo, start: queryInfo.start + queryInfo.count})
  }

  const ImgPlaceholder = () => {
    return (
      <Placeholder>
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder>
    )
  }

  return (
    <div>
      <ThreeRowLayout>
        <ThreeRowLayout.LeftStickyRow>
          {/* <Button onClick={() => { setSidebarShow(sidebarShow => !sidebarShow) }} circular color='teal'>
            分类
          </Button>
          <Transition visible={ !sidebarShow } animation='fade right' duration={500} >
          </Transition> */}
          <VerticalSidebar handleClick={item => changeImgType(item)} data={typeList} />
        </ThreeRowLayout.LeftStickyRow>
        <ThreeRowLayout.CenterRow>
          {/* <InfiniteScroll
            initialLoad={true}
            pageStart={0}
            loadMore={ () => loadMoreImgs() }
            hasMore={ !isLoading && imgList.length !== 0 }
            threshold={50}
          > */}
          <div style={{ minHeight: '800px' }}>
            <ImgListView
              handlePreview={ item => handlePreviewImg(item) }
              handleDownload = { item => handleDownloadImg(item) }
              data={ imgList } 
              />
          </div>
          {/* </InfiniteScroll> */}
          { isLoading ? <ImgPlaceholder/> : null }
        </ThreeRowLayout.CenterRow>
        <ThreeRowLayout.RightRow>
          { sidebarShow ? 123 : 321 }
        </ThreeRowLayout.RightRow>
      </ThreeRowLayout>
      {/* 预览图 */}
      <ImgPreview handleClick={ () => setIsPreview(false) } visible={ isPreview } previewImg={ currentImg } />
      {/* 下载选项 */}
      <DownloadModal onClose={ () => setIsDownload(false) } visible={ isDownload } downloadImg={ currentImg } />
    </div>
  )
}

export default withRouter(React.memo(Test))
