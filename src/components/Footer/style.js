import styled from 'styled-components'

export const FooterWrap = styled.footer`
  color: white;
  background: black;
  min-height: 20vh;
  padding: 40px 4% 20px 4%;

  .row-top {
    display: flex;

    .col-left {
      flex: 1;
    }

    .col-center {
      flex: 1;
    }

    .col-right {
      flex: 1;
    }

    .title {
      font-size: 18px;
    }

    .links__wrap {
      color: gray;
      margin-top: 20px;
      a {
        color: white;
        display: block;
        margin-top: 4px;
        &:hover {
          color: teal;
          cursor: pointer;
        }
      }
    }

  }

  .row-bottom {
    text-align: center;
    font-size: 12px;
  }

`