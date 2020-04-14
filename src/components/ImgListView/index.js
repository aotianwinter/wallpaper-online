import React, { useState, useEffect } from "react"
import { getPictureList } from '../api/getData'
import { Image } from 'semantic-ui-react'

export default function Test () {
  const [imgList, setImgList] = useState([])

  useEffect(() => {
    // setIsLoading(true)
    const getData = async() => {
      const res = await getPictureList({
        type: 5,
        start: 0,
        count: 30
      })
      if (res.data.data !== []) {
        setImgList(res.data.data)
      }
    }
    getData()
  }, [])

  return (
    <>
      {
        imgList.map((item) => {
          return (
            <div style={{
              width: '20%'
            }}>
              <Image src={item.url} size='small' />
            </div>
          )
        })
      }
    </>
  )
}