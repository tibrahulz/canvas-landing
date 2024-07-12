/* eslint-disable */

import styled from 'styled-components';

const StyledCanvasPreview = styled.section`
.column {
  display: flex;
  width: 91%;
  width: ${props => (props.user ? '100%' : '91%')};
  width: ${props => (props.self ? '91%' : '100%')};
  width: ${props => (!props.self && !props.user && '91%')};
  flex-direction: column;
  align-items: center;
  margin: 2.5rem auto 0;
  @media only screen and (max-width: 769px) {
    width: 98%;
  }
}
  .headerWithButtons {
    width: 100%;
    display: flex;
    align-items: center;
    .rightBtns {
      padding: 1rem;
      button {
        padding: 1rem;
        cursor: pointer;
      }

      span {
        font-weight: 700;
        font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A} !important;
      }
      .ant-btn-round.ant-btn-lg {
        height: 2rem;
      }
    }
    .usernameContainer {
      display: flex;
      align-items: center;
      border: none;
      padding: 0;
      background: transparent;
      img {
        border-radius: 50%;
      }
      p {
        margin: 0;
      }
    }
  }

  .usernameContainer {
    display: flex;
    align-items: center;
    border: none;
    padding: 0;
    background: transparent;
    img {
      border-radius: 50%;
    }
    p {
      margin: 0;
    }
  }

  .headerTitle {
    div {
      span {
        font-weight: 700;
        font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_F};
        margin-left: 0;
      }
    }
  }

  .center {
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }

  .flex {
    width: 100%;
    display: flex;
    gap: 24px;

    @media only screen and (max-width: 769px) {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    .whole_lock_bg {
      width: 100% !important;
      background-color: rgba(228, 241, 255, 0.447) !important;
    }
  }
  .canvasCard {
    width: 100%;
  }
  .canvasCard .card_image {
    margin: 1rem;
    border-radius: 1.75rem;
    object-fit: contain;
    width: 30%;
    height: 26.875rem;
    background-image: url(https://picsum.photos/200/300);
    -webkit-transition: box-shadow 0.4s ease-in-out;
    transition: box-shadow 0.4s ease-in-out;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;

    @media only screen and (max-width: 901px) {
      width: 100%;
    }
  }

  .alignCenter {
    width: 100%;
    margin: 30px auto;
    font-weight: 400;
    font-size: 18px;
    display: flex;
    margin-left: 1.2rem;
    @media only screen and (max-width: 901px) {
      margin-left: 2rem;
    }
  }
  .canvasDiscription {
    margin-right: 2rem;
    margin-top: 1rem;
    // max-width: 70%;
    width: 100%;
    overflow-wrap: break-word;
    @media only screen and (max-width: 901px) {
      margin: 0 auto;
      max-width: 100%;
      width: 95%;
      // margin-left: 2rem;
    }

    p {
      font-weight: 300;
      font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_SMALL_G};
      line-height: 1.25rem;
    }
    .priceBox {
      display: flex;
      align-items: center;
      background: #f1c961;
      border-radius: 4px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      width: max-content;
      height: 20px;
      p {
        font-weight: 600;
        font-size: 0.8rem;
        line-height: 16px;
        margin: -2px;
        padding: 0.8rem;
        padding-left: 0.7rem;
      }
      .roundedBox {
        width: 25px;
        height: 25px;
        font-weight: 600;
        border: 3px solid #fff;
        border-radius: 50%;
        text-align: center;
        position: relative;
        left: -1px;
        padding: 0;
      }
    }
  }

  .mediaContainer {
    margin-right: 2rem;
    margin-top: 3rem;
    position: relative;
    display: flex-reverse;
    justify-content: flex-start;
    align-items: flex-end;
    .duration-text {
      position: absolute;
      left: 90%;
      top: -26px;
      font-size: 18px;
      line-height: 22px;
    }
    .parent-span {
      /* width: 100%; */
      position: absolute;
      left: 0;
      bottom: -30px;
      z-index: 100;
      cursor: pointer;
      transform: translateY(-50%);
    }
    .parent-video {
      width: fit-content;
      display: flex;
      justify-content: center;
      position: absolute;
      left: 50%;
      bottom: -30px;
      z-index: 100;
      cursor: pointer;
      transform: translate(-50%, -50%);
      margin: 0 auto;

      @media only screen and (max-width: 901px) {
        right: -60px;
        bottom: 50%;
        z-index: 100;
        transform: translateY(50%);
        left: auto;
        margin: 0;
      }
    }

    .play-button {
      position: relative;
      left: 0;
      background: #333333;
      border: 1px solid #ffffff;
      width: 48px;
      height: 48px;
      box-shadow: none;
      .icon {
        font-size: 25px;
      }
    }
    #waveformDiv {
      width: 100%;
    }
  }

  .lockStyle {
    display: flex;
    justify-content: center;
  }

  .whole_lock_bg {
    width: 100% !important;
  }
  .alignCenterAudio {
    display: flex;
    justify-content: center;
  }

  .heading.comment {
    font-weight: bolder;
  }
`;

export default StyledCanvasPreview;
