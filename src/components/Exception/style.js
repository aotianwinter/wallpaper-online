import styled from 'styled-components'

export const ExceptionWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10% 20%;
  min-height: 500px;

  @media screen and (max-width: 768px) {
    padding: 10% 0;
  }

  .img__wrap {
    flex: 1;
    .imgEle {
      width: 100%;
      max-width: 430px;
      height: 360px;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: contain;
    }
  }
  .content__wrap {
    flex: 1;
    margin-left: 20px;
    .title {
      margin-bottom: 24px;
      color: #434e59;
      font-weight: 600;
      font-size: 72px;
      line-height: 72px;
    }
    .desc {
      margin-bottom: 16px;
      color: #434e59;
      font-size: 20px;
      line-height: 28px;
    }
    .action {
      button:not(:last-child) {
        margin-right: 8px;
      }
    }
  }
`