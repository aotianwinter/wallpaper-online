import { CHANGE_IMG_TYPES, CHANGE_IMG_LIST, CHANGE_IS_LOADING } from './actionTypes'
import { getCategories, getPictureList } from '../../../api/getData'
// import { fromJS } from 'immutable'

export const changeImgTypes = (data) => ({
  type: CHANGE_IMG_TYPES,
  data
})

export const changeImgList = (data) => ({
  type: CHANGE_IMG_LIST,
  data
})

export const changeIsLoading = (data) => ({
  type: CHANGE_IS_LOADING,
  data
})

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

export const getImgList = (typeId) => {
  // console.log(typeId)
  return async (dispatch) => {
    const res = await getPictureList({
      type: typeId || 5,
      start: 0,
      count: 30
    })
    if (res.data.data) {
      // console.log(res.data.data)
      dispatch(changeIsLoading(false))
      const action = changeImgList(res.data.data)
      dispatch(action)
    }
  }
}

// const filter