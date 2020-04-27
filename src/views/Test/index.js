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
  const [previewImg, setPreviewImg] = useState({}) // preview img info
  const [sidebarShow, setSidebarShow] = useState(false) // is sidebar visible
  const { imgTypes, imgList, isLoading, isPreview } = props
  const { getImgTypesDispatch, getImgListDispatch, changeIsPreviewDispatch } = props

  useEffect(() => {
    if (!imgTypes.size) {
      getImgTypesDispatch()
    }
    if (!imgList.size) {
      getImgListDispatch()
    }
  }, [])

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
    getImgListDispatch(item.key)
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
      <Button onClick={() => setSidebarShow(!sidebarShow)}
        circular color='teal'>123
      </Button>
      <hr/>

      {/* <Sidebar.Pushable style={{ minHeight: '100vh' }} as={Segment}>
        <VerticalSidebar handleClick={changeImgType} data={imgTypes} visible={sidebarShow}>
        </VerticalSidebar>
        <Sidebar.Pusher onClick={() => setSidebarShow(false) } dimmed={sidebarShow}>
          <Segment basic>
            { !isLoading ? <ImgListView handleImgViewClick={ item => handlePreviewImg(item) } data={ imgList }/> : <ImgPlaceholder/> }
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable> */}

      { !isLoading ? (
        <InfiniteScroll
          initialLoad={true}
          pageStart={0}
          loadMore={ () => console.log('+11') }
          hasMore={!isLoading}
          threshold={50}
        >
          <ImgListView handleImgViewClick={ item => handlePreviewImg(item) } data={ imgList }/>
        </InfiniteScroll>
      )
        : <ImgPlaceholder/>
      }
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
    isPreview: state.getIn(['test', 'isPreview']),
  })
}

// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    getImgTypesDispatch () {
      dispatch(actionTypes.getImgTypes())
    },
    getImgListDispatch (typeId) {
      dispatch(actionTypes.getImgList(typeId))
    },
    changeIsPreviewDispatch (isPreview) {
      dispatch(actionTypes.changeIsPreview(isPreview))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Test))
