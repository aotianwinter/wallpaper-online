import React from 'react'
import { FixedBt } from './style'
import { Button } from 'semantic-ui-react'
// import { throttle } from 'throttle-debounce'

function BackTop (props) {
  const el = document.documentElement

  const cubic = value => Math.pow(value, 3)
  const easeInOutCubic = value => value < 0.5
  ? cubic(value * 2) / 2
  : 1 - cubic((1 - value) * 2) / 2

  const scrollToTop = () => {
    const beginTime = Date.now()
    const beginValue = el.scrollTop

    const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16))
    const frameFunc = () => {
      const progress = (Date.now() - beginTime) / 500
      if (progress < 1) {
        el.scrollTop = beginValue * (1 - easeInOutCubic(progress))
        rAF(frameFunc)
      } else {
        el.scrollTop = 0
      }
    }
    rAF(frameFunc)
  }

  return (
    <FixedBt onClick={ scrollToTop }>
      <Button size='big' circular color='teal' icon='arrow circle up' />
    </FixedBt>
  )
}

export default React.memo(BackTop)