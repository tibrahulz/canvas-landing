import styled from 'styled-components';
export const AboutPage = styled.section`
  .navBackground {
    /* height: 81px; */
    width: 100%;
    position: sticky;
    top: 0;
    background-color: #fff;
    // z-index: 10;
  }
  .wrapper {
    max-width: 1133px;
    margin: 0 auto;
  }
  h1,
  h2,
  h4 {
      font-family: 'Nunito';
    /* text-align: center; */
  }
  h2 {
    font-weight: 600;
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_C};
  }
  p {
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;

    font-family: 'Montserrat', Helvetica;
    /* text-align: center; */
  }
  button {
    // font-size: 18px !important;
    // padding: 1.125rem 1.25rem !important;
    // font-weight: 600 !important;
    // font-family: 'Raleway', sans-serif !important;
    // border-radius: 40px !important;
  }
  video,
  iframe {
    border-radius: 10px;
    height: 270px;
    max-width: 480px;
    /* width: 100%; */
  }
  .section-AboutUs {
    padding: 70px 0 100px;
    z-index: 1;
    .navBackground {
      height: 81px;
      width: 100%;
      position: sticky;
      top: 38px;
      background-color: ${({ theme }) => theme.BACKGROUND_COLORS.WHITE};
      z-index: 10;
    }
    /* .heading {
      margin-top: 4rem;
      h2 {
        color: ${({ theme }) => theme.FONT_COLORS.TERTIARY_0};
        font-weight: 500;
        font-size: 1.5rem;
        border-bottom: 2px solid #cccccc;
      }
    } */
  }
  .heroSection {
    background: ${({ theme }) => theme.BACKGROUND_COLORS.WHITE} !important;
    color: ${({ theme }) => theme.FONT_COLORS.TERTIARY_0};
    padding-top: 3rem;
    padding-bottom: 3rem;
    .content-row-about {
      background-color: #fff;
    }
  }
  .content-row-about {
    display: flex;
    justify-content: space-between;
    margin-top: 4.3rem;
    align-items: center;
    padding: 0 0.75rem;
  }
  .secondryBackground {
    background-color: #fafafa;
    padding: 3rem 0;
  }
  .content-row-about .content-text {
    width: 45%;
    font-weight: 400;
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_E};
    line-height: 2.25rem;
    /* text-align: justify; */
  }
  .content-row-about .content-text h2 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.FONT_SIZES.MEDIUM_A};
  }
  .row-reverse {
    flex-direction: row-reverse;
  }
  .content-img {
    max-width: 480px;
    width: 100%;
    iframe {
      max-width: 480px;
    }
  }
  .allInOne-About {
    width: 100%;
    margin: 0 auto;
    /* margin-top: 7rem; */
    display: flex;
    align-items: center;
    flex-direction: column;
    h2 {
      font-weight: 600;
      font-size: 32px;
      line-height: 46px;
      text-align: center;
      color: #000000;
      margin-bottom: 2rem;
    }
    .icons {
      display: flex;
      align-items: center;
      img {
        width: 3.125rem;
        height: 3.125rem;
      }
    }
    span {
      font-weight: 700;
      font-size: 22px;
      line-height: 26px;
    }
    flex-wrap: wrap;
    justify-content: center;
  }

  .section4-aboutUs {
    text-align: center;
    padding: 4rem 0;
    font-weight: 500;
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_F};
    line-height: 1.75rem;
    // background-color: #fafafa;
  }

  .creatingCanvasText {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: ${({ theme }) => theme.FONT_SIZES.MEDIUM_A};
  }
  .iconMargin {
    margin: 0 2rem;
    font-size: 2rem;
  }

  .control {
    width: 100%;
    padding: 4rem 2rem;

    h2 {
      font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_C};
      margin-bottom: 0.25rem;
      text-align: center;
    }

    p {
      font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
      width: 100%;
      text-align: center;
    }

    .monetizeFeatureContainer {
      /* max-width: 59rem; */
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin: 0 auto;
      margin-top: 3rem;
      .menu-list {
        width: max-content;
        background: none;

        li {
          margin-top: 1rem;
          width: 222px;
          height: 75px;
          align-items: center;
          border-radius: 40px;
          .menuItemsText {
            font-size: 18px !important;
            margin-left: 1.25rem;
            font-size: 22px;
            color: #555555;
          }

          img {
            filter: invert(0.3) sepia(2) saturate(0) hue-rotate(46deg);
          }
        }
      }
      .ant-menu-item-selected {
        box-shadow: 0px 0px 16px #e5e5e5;
        .menuItemsText {
          background: linear-gradient(
            90.7deg,
            #e27625 14.78%,
            #00b3a6 49.49%,
            #5b5fd1 77.18%,
            #0e56a2 99.15%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
          font-weight: 700 !important;
          font-size: 24px !important;
        }
        img {
          filter: invert(0) !important;
        }
        /* li {
        } */
      }
      .ant-menu-inline {
        border-right: none;
      }
      .ant-menu-item-selected::after {
        display: none;
      }
      .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
        background: transparent;
      }

      .featureContent {
        margin-left: 2rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        max-height: 43rem;
        overflow-y: scroll;
        padding: 1rem;

        ::-webkit-scrollbar {
          width: 1px;
        }
        p {
          text-align: center;
          font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
          margin-left: 0.25rem;
        }
        .dot-container {
          display: none;
        }
        .card-details-container {
          flex-direction: column;
        }
        .user-name {
          /* display: none; */
          color: #a7a7a7;
        }
        .name {
          margin-top: 1rem;
        }
        .avatar {
          width: 44px;
          height: 44px;
          margin: 0 auto;
          span {
            width: 44px !important;
            height: 44px !important;
          }
        }
      }
    }
  }

  .mobControlSec {
    display: none;
  }

  @media all and (max-width: 768px) {
    .navBackground {
      height: 81px;
    }
    .heroSection {
      .content-row-about {
        flex-direction: column;
      }
      .heading {
        display: none;
      }
    }
    .content-row-about {
      flex-direction: column-reverse;
      margin-top: 0;
    }
    .content-row-about .content-text {
      width: 90%;
      h2 {
        text-align: center;
        font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_E};
      }
      p {
        font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
        text-align: center;
      }
    }

    .iconMargin {
      margin: 0 1rem;
      font-size: 1.5rem;
    }
    .allInOne-About .icons {
      img {
        width: 2rem;
        height: 2rem;
      }
    }
    .creatingCanvasText {
      padding: 0 0.5rem;
    }

    .creatingCanvasText {
      font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_E};
    }

    /*  */
    .monetizeFeatureContainer {
      display: none !important;
    }
    .control {
      padding: 2rem 1.5rem;
      p {
        margin-bottom: 0;
      }
    }
    .mobControlSec {
      display: block;
    }
    .ant-collapse-item-active {
      /* height: 620px; */
    }
    .card-details-container {
      flex-direction: column;
      width: 16.75rem;
    }
    .avatar {
      margin: 0 auto;
      margin-bottom: 1rem;
    }
    .dot-container {
      display: none;
    }
    .user-name {
      margin-bottom: 1rem !important;
    }
    .ant-collapse > .ant-collapse-item {
      margin-top: 1rem;
      width: 90vw;
      align-items: center;
      border-radius: 40px;
      background: #fff;
      justify-content: space-between;
      .menuItemsText {
        font-size: 18px !important;
        margin-left: ${({ theme }) => theme.SPACING.MEDIUM_A};
        background: linear-gradient(
          90.7deg,
          #e27625 14.78%,
          #00b3a6 49.49%,
          #5b5fd1 77.18%,
          #0e56a2 99.15%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        font-weight: 700 !important;
        font-size: 24px !important;
      }
      box-shadow: 0px 0px 16px #e5e5e5;
    }

    .ant-collapse-header-text {
      display: flex;
      align-items: center;
      padding-left: 1rem;
    }

    .ant-collapse > .ant-collapse-item > .ant-collapse-header {
      border: none;
      align-items: center;
      justify-content: space-between;
      .pannelHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      flex-direction: row-reverse;
    }
    .ant-collapse-content {
      border: none;
      text-align: center;
      h3 {
        font-weight: 600;
        font-size: 18px;
      }
    }
    .ant-collapse {
      width: max-content;
      border: none;
      margin: 0 auto;
      background-color: #fff !important;
    }

    .ant-collapse > .ant-collapse-item {
      border-bottom: none;
    }

    .ant-collapse-content > .ant-collapse-content-box {
      display: flex;
      gap: 1rem;
      overflow: scroll;

      ::-webkit-scrollbar {
        display: none;
      }
    }
  }

  @media all and (min-height: 768px) {
    .heroSection {
      min-height: auto;
      padding-bottom: 3rem;
    }
  }
`;
