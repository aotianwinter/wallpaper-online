import styled from 'styled-components'

export const PhoneNav = styled.div`
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