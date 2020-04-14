import { combineReducers } from 'redux-immutable'
import { reducer as aboutReducer } from '../views/About/store/index'
import { reducer as testReducer } from '../views/Test/store/index'

export default combineReducers({
  test: testReducer,
  about: aboutReducer
})