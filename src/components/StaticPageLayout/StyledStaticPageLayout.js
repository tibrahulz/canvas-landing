import styled from 'styled-components';

export const StaticPageWrapper = styled.section`
  position: relative;
  width: 100vw;
  .header_container {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
    @media (max-width: 768px) {
      position: absolute;
    }
  }

  .page_content_container {
    position: relative;
    top: 0px;
    margin-top: 5rem;
    width: 80vw;
    margin: 4rem auto 0;
    overflow-x: hidden;
    @media (max-width: 768px) {
      top: 0;
    }
  }
  .featuring {
    padding: 2rem 0;
    margin: 0 auto;
    text-align: center;
    /* background-color: #f2fff3; */
    .navBackground {
      height: 81px;
      width: 100%;
      position: sticky;
      top: 38px;
      background-color: #fafafa;
      z-index: 10;
    }
    h3 {
      margin-bottom: 2rem;
      font-weight: 700;
      font-size: 2rem;
    }
  }

  .featuring-carousel {
    // width: 75%;
    margin: 0 auto;
    .ant-carousel .slick-prev {
      left: -40px;
      z-index: 999;
    }
    .ant-carousel .slick-prev,
    .ant-carousel .slick-next,
    .ant-carousel .slick-prev:hover,
    .ant-carousel .slick-next:hover {
      color: #3c8a42;
      background-color: #ccebce;
      border-radius: 32px;
      padding: 20px;
      height: 64px;
      width: 64px;
      @media (max-width: 768px) {
        height: 34px;
        width: 34px;
        padding: 8px;
      }
    }

    .ant-carousel .slick-slider .slick-list {
      height: 200px;
      @media (max-width: 768px) {
        height: auto;
      }
    }
    .ant-carousel .slick-next {
      right: -40px;
      z-index: 999;
    }
    .featuringImageContainer {
      padding: 1rem;
      position: relative;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0px 1px 54px #00000017;
      height: 142px;
      margin: 20px 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      > span {
        margin: 10px !important;
      }
      @media (max-width: 768px) {
        height: 100%;
        margin: 10px;
        padding: 34px;
        box-shadow: none;
      }
    }
  }
  .canvasIntroHeading {
    font-size: 48px;
    font-weight: 700;
    /* color: ${({ theme }) => theme.FONT_COLORS.WHITE}; */
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px #868686;
    background: linear-gradient(
      180deg,
      rgb(125.61, 145.4, 183.81) 0%,
      rgba(44.2, 204, 88.94, 0.98) 36.55%,
      rgba(137.89, 201.8, 93.97, 0.99) 77.79%,
      rgb(224.19, 195.83, 95.28) 100%
    );
    background-clip: text;
  }
  /* .canvasIntro {
    text-align: center;
    background-color: #525c53;
    padding: 5rem 0;
    .canvasIntroButtons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      max-width: 45rem;
      margin: 0 auto;
      section {
        margin-top: 1rem;
      }
    }
    .free-forever-no {
      text-align: center;
      margin-top: 1rem;
      color: #ffffff;
      font-family: 'Montserrat', Helvetica;
      font-size: 18px;
      font-weight: 400;
    }
    @media (max-width: 768px) {
      padding: 3rem 0;
      .mobile-intro {
        background: none;
        color: #ffffff;
        font-family: 'Montserrat-Black', Helvetica;
        font-size: 16px;
        font-weight: 900;
        -webkit-background-clip: unset !important;
        -webkit-text-fill-color: #ffffff;
        -webkit-text-stroke: transparent;
      }
      .canvasIntroButtons {
        margin: 33px 0;
      }
    }
  } */
  @media (max-width: 768px) {
    .page_content_container {
      width: 100vw;
      margin-top: 0;
    }
  }
`;
