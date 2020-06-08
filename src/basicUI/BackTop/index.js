import React, { createRef } from 'react'
import { FixedBt } from './style'
// import { Dimmer, Image } from 'semantic-ui-react'

function BackTop (props) {
  const contextRef = createRef()

  const cubic = value => Math.pow(value, 3)
  const easeInOutCubic = value => value < 0.5
  ? cubic(value * 2) / 2
  : 1 - cubic((1 - value) * 2) / 2

  const scrollToTop = () => {
    const el = contextRef.current;
    const beginTime = Date.now();
    const beginValue = el.scrollTop;
    const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16));
    const frameFunc = () => {
      const progress = (Date.now() - beginTime) / 500;
      if (progress < 1) {
        el.scrollTop = beginValue * (1 - easeInOutCubic(progress));
        rAF(frameFunc);
      } else {
        el.scrollTop = 0;
      }
    };
    rAF(frameFunc);
  }

  return (
    <FixedBt ref={contextRef} onClick={ scrollToTop }>
      UP
    </FixedBt>
  )
}

export default React.memo(BackTop)