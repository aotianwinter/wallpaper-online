import React, { useState, useEffect, createRef } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from './store/actionCreators'
import VerticalSidebar from '../../components/Sidebar'
import ImgView from '../../components/ImgView'
import ImgPreview from '../../components/ImgPreview'

// import { RightBt } from './style'
import { Placeholder, Button, Image, Sidebar, Segment } from 'semantic-ui-react'

function Test (props) {
  const contextRef = createRef()
  const [preview, setPreview] = useState({}) // preview
  const [sidebarShow, setSidebarShow] = useState(false) // is sidebar visible
  const { imgTypes, imgList, isLoading } = props
  const { getImgTypesDispatch, getImgListDispatch } = props

  useEffect(() => {
    if (!imgTypes.size) {
      getImgTypesDispatch()
    }
    if (!imgList.size) {
      getImgListDispatch()
    }
  }, [])

  const changeImgType = (item) => {
    getImgListDispatch(item.key)
  }

  const ImgListView = () => {
    return (
      imgList.length ? imgList.map((item) => {
        return (
          <div key={item.id}
            style={{ display: 'inline-block', width: '25%' }}
          >
            {/* <Image style={{ width: '100%', lineHeight: '0px' }} src={item.url}/> */}
            <ImgView handleClick={() => setPreview(item)}
              data={item}>
            </ImgView>
          </div>
        )
      }) : null
    )
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
    <div ref={contextRef}>
      {/* <RightBt>
        <Button onClick={() => setSidebarShow(!sidebarShow)}
          circular color='teal' icon='arrow up'>
        </Button>
        <Button onClick={() => {document.body.scrollTop = 0; document.documentElement.scrollTop = 0}}
          circular color='teal'>22
        </Button>
      </RightBt> */}
      
      <Sidebar.Pushable style={{ minHeight: '100vh' }} as={Segment}>
        <VerticalSidebar handleClick={changeImgType} data={imgTypes} visible={sidebarShow}>
        </VerticalSidebar>
        <Sidebar.Pusher onClick={() => {setSidebarShow(false)}} dimmed={sidebarShow}>
          <Segment basic>
            { !isLoading ? <ImgListView/> : <ImgPlaceholder/> }
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>

      <ImgPreview handleClick={ () => setPreview({}) }
        url={ preview.url || '' } visible={ preview.url && preview.url !== '' } ></ImgPreview>
    </div>
  )
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => {
  return ({
    imgTypes: state.getIn(['test', 'imgTypes']),
    imgList: state.getIn(['test', 'imgList']),
    isLoading: state.getIn(['test', 'isLoading'])
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Test))
