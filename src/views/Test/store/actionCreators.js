import { CHANGE_IMG_TYPES, CHANGE_IMG_LIST, CHANGE_IS_LOADING, CHANGE_IS_PREVIEW } from './actionTypes'
import { getCategories, getPictureList } from '../../../api/getData'
import { fromJS } from 'immutable'

export const changeImgTypes = (data) => ({
  type: CHANGE_IMG_TYPES,
  data: fromJS(data)
})

export const changeImgList = (data) => ({
  type: CHANGE_IMG_LIST,
  data: fromJS(data)
})

export const changeIsLoading = (data) => ({
  type: CHANGE_IS_LOADING,
  data
})

export const changeIsPreview = (data) => ({
  type: CHANGE_IS_PREVIEW,
  data
})

// export const changeQueryInfo = (data) => ({
//   type: CHANGE_QUERY_INFO,
//   data: fromJS(data)
// })

export const getImgTypes = () => {
  return async (dispatch) => {
    const res = await getCategories()
    let array = []
    Object.keys(res.data.data).map((i) => {
      let temp = {}
      temp.key = res.data.data[i].id
      temp.title = res.data.data[i].name
      // temp.href = '/test/' + res.data.data[i].id
      array.push(temp)
    })
    const action = changeImgTypes(array)
    dispatch(action)
  }
}

export const getImgList = (queryInfo) => {
  return async (dispatch) => {
    dispatch(changeIsLoading(true))
    const res = await getPictureList({
      type: queryInfo.type,
      start: queryInfo.start,
      count: queryInfo.count
    })
    if (res.data.data) {
      dispatch(changeIsLoading(false))
      dispatch(changeImgList(res.data.data))
    }
  }
}

export const mergeImgList = (oldArray, queryInfo) => {
  return async (dispatch) => {
    dispatch(changeIsLoading(true))
    const res = await getPictureList({
      type: queryInfo.type,
      start: queryInfo.start,
      count: queryInfo.count
    })
    if (res.data.data) {
      dispatch(changeIsLoading(false))
      // const action = changeImgList(res.data.data)
      // dispatch(action)
    }
  }
}
