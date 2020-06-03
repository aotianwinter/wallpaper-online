import styled from 'styled-components'

export const ImgWrap = styled.div`
  position: relative;
  display: inline-block;

  :hover {
    .dim__wrap {
      display: block;
    }
  }

  .dim__wrap {
    display: none;
    position: absolute;
    width: 100%;
    bottom: 0px;
    background: rgba(0, 0, 0, 0.4);
    padding: 4px;
    text-align: right;

    .tag {
      color: white;
      float: left;
    }
  }
`