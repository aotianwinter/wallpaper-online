import React from 'react'
import { addNum, addNum2 } from './store/actionCreators'
import { connect } from 'react-redux'
import { Header, Label } from 'semantic-ui-react'
import aa from '../../assets/dajiangyou.jpg'

function PageAbout (props) {
  // console.log(props)
  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      <Header as='h1'>Resources are for learning only, not for commercial use.</Header>
      <Label as='a' size='large' image>
        <img src={aa} />
        打酱油
      </Label>
    </div>
  )
}

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => {
  console.log(state.getIn(['about', 'zxc']))
  return ({
    aa: state.getIn(['about', 'zxc']),
    bb: 111
  })
}
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    add1() {
      dispatch(addNum());
    },
    add2(a) {
      dispatch(addNum2(a));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(PageAbout))