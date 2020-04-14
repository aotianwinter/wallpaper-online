import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  zxc: 100
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.ADD_NUM:
      return state.set('zxc', state.getIn(['zxc'])+action.data)
    case actionTypes.ADD_NUM2:
      return state.set('zxc', state.getIn(['zxc'])+2)
    default:
      return state
  }
}