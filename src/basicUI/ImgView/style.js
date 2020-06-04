import styled from 'styled-components'

export const ImgWrap = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
  width: 100%;

  .img-placeholder {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    max-height: 100%;
    max-width: 100%;
  }

  :hover {
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.8);
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