import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  imgList: [],
  imgTypes: [],
  isLoading: true,
  isPreview: false
})

export default (state = defaultState, action) => {
  // console.log(action)
  switch(action.type) {
    case actionTypes.CHANGE_IMG_TYPES:
      return state.set('imgTypes', action.data)
    case actionTypes.CHANGE_IMG_LIST:
      return state.set('imgList', action.data)
    case actionTypes.CHANGE_IS_LOADING:
      return state.set('isLoading', action.data)
    case actionTypes.CHANGE_IS_PREVIEW:
      return state.set('isPreview', action.data)
    default:
      return state
  }
}