import styled from 'styled-components'

export const PhoneNavBt = styled.div`
  color: white;
  width: 20px;
  height: 100%;
  em {
    color: white;
    display: block;
    width: 20px;
    height: 2px;
    width: 100%;
    background: white;
  }
  em:not(:first-child) {
    margin-top: 4px;
  }
  em:not(:nth-of-type(2)) {
    transition: all 0.5s ease 0.1s;
  }
`

export const PhoneNavWrapper = styled.div`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0;
  z-index: -1;
  display: block;
  transition: all 0.5s ease 0.1s;
  margin-top: 49px;
  background: black;
`