import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroller'
import * as actionTypes from './store/actionCreators'
import VerticalSidebar from '../../components/Sidebar'
// import LazyLoad from 'react-lazyload'
import ImgListView from '../../components/ImgListView'
import ImgPreview from '../../basicUI/ImgPreview'

import { Placeholder, Sidebar, Segment, Button } from 'semantic-ui-react'

function Test (props) {
  const [queryInfo, setQueryInfo] = useState({type: 5, start: 0, count: 30}) // query info

  const [previewImg, setPreviewImg] = useState({}) // preview img info
  const [sidebarShow, setSidebarShow] = useState(false) // is sidebar visible
  const { imgTypes, imgList: immutableImgList, isLoading, isPreview } = props
  const { getImgTypesDispatch, getImgListDispatch, mergeImgListDispatch, changeIsPreviewDispatch } = props

  const imgList = immutableImgList.toJS()

  useEffect(() => {
    if (!imgTypes.size) {
      getImgTypesDispatch()
      getImgListDispatch(queryInfo)
    }
  }, [])

  // useEffect(() => {
  //   console.log(queryInfo)
  // }, [queryInfo])

  const handlePreviewImg = (img) => {
    if (isPreview) {
      setPreviewImg({})
      changeIsPreviewDispatch(false)
    } else {
      setPreviewImg(img)
      changeIsPreviewDispatch(true)
    }
  }

  const changeImgType = (item) => {
    setQueryInfo({...queryInfo, type: item.key})
  }

  const loadMoreImgs = () => {
    console.log()
    // setQueryInfo({...queryInfo, count: 100})
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
      {/* <Button onClick={() => }
        circular color='teal'>123
      </Button> */}

      {/* <Sidebar.Pushable style={{ minHeight: '100vh' }} as={Segment}>
        <VerticalSidebar handleClick={changeImgType} data={imgTypes} visible={sidebarShow}>
        </VerticalSidebar>
        <Sidebar.Pusher onClick={() => setSidebarShow(false) } dimmed={sidebarShow}>
          <Segment basic>
            { !isLoading ? <ImgListView handleImgViewClick={ item => handlePreviewImg(item) } data={ imgList }/> : <ImgPlaceholder/> }
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable> */}

      <InfiniteScroll
        initialLoad={true}
        pageStart={0}
        loadMore={ () => loadMoreImgs() }
        hasMore={!isLoading && imgList.length !== 0}
        threshold={50}
      >
        <ImgListView handleImgViewClick={ item => handlePreviewImg(item) } data={ imgList }/>
      </InfiniteScroll>
      { isLoading ? <ImgPlaceholder/> : null }

      <ImgPreview handleClick={ () => handlePreviewImg() }
        url={ previewImg.url } visible={ isPreview }
      />
    </div>
  )
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => {
  return ({
    imgTypes: state.getIn(['test', 'imgTypes']),
    imgList: state.getIn(['test', 'imgList']),
    isLoading: state.getIn(['test', 'isLoading']),
    isPreview: state.getIn(['test', 'isPreview'])
  })
}

// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    getImgTypesDispatch () {
      dispatch(actionTypes.getImgTypes())
    },
    getImgListDispatch (queryInfo) {
      dispatch(actionTypes.getImgList(queryInfo))
    },
    mergeImgListDispatch (oldArray) {
      dispatch(actionTypes.mergeImgList(oldArray))
    },
    changeIsPreviewDispatch (isPreview) {
      dispatch(actionTypes.changeIsPreview(isPreview))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Test))
