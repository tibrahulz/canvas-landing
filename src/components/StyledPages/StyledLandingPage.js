import styled from 'styled-components';

export const StyledLandingPage = styled.section`
  position: relative;

  /* Main title of every section in landing page */
  .main-title {
    font-family: 'Montserrat', Helvetica;
    font-size: 2.5rem;
    font-weight: 900;
    /* line-height: 1.2; */
    /* color: ${({ theme }) => theme.FONT_COLORS.WHITE}; */
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px #868686;
    background: linear-gradient(
      270deg,
      #7e91b8 -1.79%,
      rgba(44, 204, 89, 0.98) 35.36%,
      rgba(138, 202, 94, 0.99) 40.27%,
      #e0c45f 99.85%
    );
    background-clip: text;
    @media (max-width: 768px) {
      font-size: 32px;
      text-align: center;
    }
  }
  .sectionHero {
    min-height: 80vh;
    max-width: 1300px;
    margin: 0 auto;
    background-image: url('/bg-img/heroBackground.svg'),
      url('/bg-img/bg - stroke.png');
    background-size: 90%;
    background-position: bottom;
    background-repeat: no-repeat;
    display: flex;
    /* flex-direction: column; */

    img {
      border-radius: 0.5rem;
      margin-top: 1rem;
    }

    @media (max-width: 768px) {
      background-image: url('/bg-img/bg - stroke.png');
      /* .p-3 {
        margin-top: 5rem;
      } */
      padding: 0rem 0 2rem;
      min-height: auto;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      /* background-image: url('/images/mobHero.svg'), */
      /* url('/bg-img/bg - stroke.png'); */
      /* &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center 10%;

        background-image: url(https://generation-sessions.s3.amazonaws.com/31414ee6dcfd580e104da9062aa4b07f/img/bg---fill.png);
      } */
    }
  }

  .companyLogo {
    padding-top: 5rem;
    padding: 0 2%;
  }

  .overview-section {
    padding-top: 3rem;
    padding-bottom: 70px;
    background-color: #fffef8;
    text-align: center;

    .monetizeAnywhere {
      max-width: 1200px;
      margin: 0 auto;
      margin-top: 3rem;
      display: flex;
      justify-content: space-between;
      gap: 4rem;
      align-items: center;
      font-family: Montserrat !important;

      .leftSec {
        /* max-width: 569px; */
        width: 50%;
        height: 320px;
        video {
          border-radius: 8px;
        }
      }

      .rightSec {
        text-align: left;
        width: 50%;
        p {
          color: #000;
          font-family: Montserrat;
          font-size: 20px;
          margin-bottom: 3rem;
          font-weight: 500;
        }
        button {
          font-size: 1rem;
          font-weight: 700;
        }
      }

      @media (max-width: 768px) {
        flex-direction: column;
        width: 90%;
        margin: 0 auto;
        gap: 2rem;
        .leftSec {
          width: 100%;
          img {
            width: 100%;
          }
        }
        .rightSec {
          text-align: center;
          width: 100%;
          p {
            font-size: 14px;
            margin-bottom: 2rem;
          }
        }
      }
    }

    @media (max-width: 768px) {
      padding-top: 1rem;
      .main-title {
        margin-bottom: 1.5rem;
      }
    }
  }

  .red-text {
    color: ${({ theme }) => theme.FONT_COLORS.RED};
  }
  .video-section-wrapper {
    position: relative;
    text-align: center;
    .video-section-title {
      position: absolute;
      top: 85px;
      left: 0;
      right: 0;
      z-index: 2;
      @media (max-width: 768px) {
        top: 50px;
      }
    }
    .video-section-1,
    .video-section-2 {
      padding: 15rem 0 2rem;
      .canvas-vector-bg {
        width: 100%;
        height: 560px;
        position: relative;
        @media (max-width: 768px) {
          margin: 4rem 0 2rem;
          height: fit-content;
        }
        .text-wrapper {
          width: 30%;
          position: absolute;
          left: 35%;
          z-index: 2;
          .canvas-vector-title {
            font-family: 'Montserrat-Bold', Helvetica;
            font-size: 24px;
            font-weight: 700;
          }
          .lorem-ipsum-dolor {
            font-family: 'Montserrat-Medium', Helvetica;
            font-size: 14px;
            font-weight: 500;
          }
          @media (max-width: 768px) {
            width: 60%;
            left: 20%;
            .canvas-vector-title {
              font-size: 22px;
            }
            .lorem-ipsum-dolor {
              font-size: 12px;
            }
          }
        }
      }
      @media (max-width: 768px) {
        padding: 10rem 0 0;
      }
    }
    .video-section-1 {
      background-color: #fffbda;
      .canvas-vector-bg {
        margin-top: 10rem;
        .text-wrapper {
          bottom: 35%;
          @media (max-width: 768px) {
            bottom: 20%;
          }
        }
      }
    }
    .video-section-2 {
      background-color: #f4f8ff;
      .canvas-vector-bg {
        margin-top: 4rem;
        .text-wrapper {
          bottom: 15%;
          @media (max-width: 768px) {
            bottom: 10%;
          }
        }
      }
    }

    .video-wrapper {
      width: 569px;
      height: 320px;
      margin: 0 auto;
      > iframe {
        border-radius: 10px;
      }
      @media (max-width: 768px) {
        width: 90%;
      }
    }
  }
  .section-1 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    margin-top: 4rem;

    @media (max-width: 768px) {
      row-gap: 1rem;
    }
    .img {
      width: 40%;
    }

    .input-wrapper {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      flex-direction: column-reverse;
      position: relative;
      top: -4rem;
      max-width: 594px;
      width: 100%;
      .email-input {
        border-radius: 50px;
        padding-right: 4px;
        margin-top: 5rem;
      }

      @media (max-width: 768px) {
        width: 90%;
        .email-input {
          margin-top: 0;
        }
      }
    }

    .description {
      font-family: 'Montserrat', Helvetica;
      font-size: 20px;
      font-weight: 500;
      margin: 0 auto;
      margin-bottom: 1rem;
      line-height: 2rem;
      @media (max-width: 768px) {
        font-size: 14px;
        text-align: center;
        margin: 1.5rem 0;
        line-height: 1.5rem;
      }
    }

    .sec-title {
      font-family: 'Montserrat-Bold', Helvetica;
      font-size: 34px;
      font-weight: 700;
      /* need to add style */
      @media (max-width: 768px) {
        font-size: 28px;
        text-align: center;
      }
    }

    /* Other styles for input fields, buttons, etc. */

    #animate {
      color: #fff;
      animation-name: blur;
      animation-duration: 3s;
      animation-delay: 2s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

    #lock {
      margin-left: -30%;
      opacity: 0;
      animation-name: lock;
      animation-duration: 3s;
      animation-delay: 2s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      background: transparent;
      position: relative;
      top: 5px;
    }

    @keyframes blur {
      0% {
        color: #fff;
      }
      20% {
        color: #ffffff6e;
        text-shadow: 0 0 20px #fff;
      }
      50% {
        color: #fff0;
        text-shadow: 0 0 8px #fff;
      }
      80% {
        color: #ffffff6e;
        text-shadow: 0 0 20px #fff;
      }
      100% {
        color: #fff;
      }
    }

    @keyframes lock {
      10% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      75% {
        opacity: 1;
      }
      90% {
        opacity: 0;
      }
    }
    .heroBtn1 {
      display: none;
      @media (max-width: 768px) {
        display: block;
        text-align: center;
      }
    }

    .heroBtn2 {
      display: none;
    }
  }

  /* .p-3 {
    margin: 0 0 0 auto;
    width: 48%;
    padding: 0 3%;
    @media (min-width: 1290px) {
      width: 44%;
    }
    @media (max-width: 768px) {
      width: 90%;
      margin: auto 0;
    }
  } */

  .loggedInP-3 {
    width: 100%;
    /* height: 70vh; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .w-50 {
    width: 50%;
  }

  .headline {
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_D};
    font-weight: 400;
    line-height: 2.188rem;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
  }
  .headlineSec2 {
    font-size: 20px;
    text-align: center;
    font-weight: 400;
    line-height: 2.188rem;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
  }
  .videoSec2 {
    background: #d9d9d9;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    max-width: 47.5rem;
    align-items: center;
    margin-top: 3rem;
    img {
      border-radius: 0.5rem;
    }
  }
  .img {
    display: flex;
    justify-content: flex-end;
  }
  .heroBtn {
    display: flex;
  }
  .btn {
    margin-left: ${({ theme }) => theme.SPACING.SMALL_C};
    margin-top: ${({ theme }) => theme.SPACING.SMALL_C};
  }

  .cultureCreators {
    margin: 0 auto;
    background: ${({ theme }) => theme.BACKGROUND_COLORS.TERTIARY_0};
    color: ${({ theme }) => theme.FONT_COLORS.WHITE};
    padding: 5rem 0;
    padding-top: 1rem;
    margin-bottom: 2rem;
    .navBackground {
      height: 160px;
      width: 100%;
      position: sticky;
      top: 38px;
      background: ${({ theme }) => theme.BACKGROUND_COLORS.TERTIARY_0};
      z-index: 10;
    }
  }

  .titleSec3 {
    margin-bottom: 0;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: ${({ theme }) => theme.FONT_SIZES.MEDIUM_A};
    text-align: center;
    padding: 1rem;
    color: ${({ theme }) => theme.FONT_COLORS.WHITE};
  }

  .section2 {
    padding-top: 7rem;
    padding-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .testmonials {
    display: flex;
    justify-content: space-between;
    margin: 3rem auto;
  }
  .video {
    border-radius: 8px;
  }
  .canvasIntro {
    text-align: center;
    background-color: #525c53;
    /* margin-top: 5rem; */
    padding: 5rem 0;
    .canvas-intro-heading {
      color: #ffffff;
      font-family: 'Montserrat-Black', Helvetica;
      font-size: 32px;
      font-weight: 900;
    }
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
      font-size: 18px;
      font-weight: 400;
      font-family: 'Montserrat-Regular', Helvetica;
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
  }
  .featuring {
    padding: 5rem 0;
    margin: 0 auto;
    text-align: center;
    background-color: #f2fff3;
    .canvasIntroHeading {
      text-transform: capitalize;
      padding: 0;
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
      color: transparent;
      font-family: 'Montserrat', Helvetica;
      font-size: 40px;
      font-weight: 900;
    }
    @media (max-width: 768px) {
      background-color: #fafafa;
      padding: 2rem 0;
    }
    @media (max-width: 768px) {
      background-color: #fafafa;
      padding: 4rem 0 3rem;
    }
  }

  .featuring-carousel {
    width: 75%;
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
      height: 140px;
      @media (max-width: 768px) {
        height: 100px;
      }
    }
    .ant-carousel .slick-next {
      right: -40px;
      z-index: 999;
    }
    .featuringImageContainer {
      padding: 1rem;
      position: relative;
      /* background-color: #ffffff; */
      background: none;
      box-shadow: none;
      border-radius: 8px;
      /* box-shadow: 0px 1px 54px #00000017; */
      height: 71px;
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

  .testimonial-section {
    .text-wrapper-19 {
      position: absolute;
      left: 0;
      right: 0;
      z-index: 1;
      text-align: center;
      padding: 3rem 12px 0;
    }

    .testimonial-carousel-container {
      position: relative;
      & .slick-dots {
        height: 200px;
        background: linear-gradient(
          180deg,
          rgba(217, 217, 217, 0) 0%,
          rgba(255, 255, 255, 0) 0.01%,
          rgb(255, 255, 255) 43.23%
        );
        display: flex !important;
        align-items: center;
        justify-content: center;
        margin: auto;
        bottom: 0;

        @media screen and (max-width: 768px) {
          z-index: -1 !important;
        }
        .mask-group {
          width: 50px;
          height: 50px;
          object-fit: contain;
        }
        .slick-active {
          opacity: 1;
          .img-wrapper {
            /* width: 70px;
            height: 70px; */
            box-sizing: border-box;

            .mask-group {
              width: 70px;
              height: 70px;
            }

            img {
              transform: scale(1.5);
              width: 100%;
              height: 5px;
              background-color: #d9d9d9;
              border: 3px solid #5a5fd1;
              border-radius: 52%;
              width: 100%;
              object-fit: contain;
            }
          }
        }
        li {
          display: block;
          opacity: 0.5;
          width: fit-content;
          height: fit-content;
          margin: 4rem 1rem;
          text-indent: initial;
          @media screen and (max-width: 768px) {
            width: 60px;
          }
          .image-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
  .section-3 {
    margin: 0;
    padding-bottom: 5.5rem;
    width: 100%;
    background: ${({ theme }) => theme.BACKGROUND_COLORS.TERTIARY_0};
    .navBackground {
      height: 81px;
      width: 100%;
      position: sticky;
      top: 38px;
      background: ${({ theme }) => theme.BACKGROUND_COLORS.TERTIARY_0};
      z-index: 10;
    }
    .ant-carousel .slick-prev,
    .ant-carousel .slick-next,
    .ant-carousel .slick-prev:hover,
    .ant-carousel .slick-next:hover {
      color: ${({ theme }) => theme.FONT_COLORS.WHITE};
    }
  }
  .titleSection3 {
    text-align: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: ${({ theme }) => theme.FONT_SIZES.MEDIUM_A};
    margin-bottom: ${({ theme }) => theme.SPACING.LARGE_A};
    color: ${({ theme }) => theme.FONT_COLORS.WHITE};
  }

  .carouselCard {
    display: flex !important;
    max-width: 59.5rem;
    padding: 3rem;
    margin: 0.5rem auto;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.EXTRA_SMALL_A};
    background: ${({ theme }) => theme.BACKGROUND_COLORS.WHITE};
  }

  .carouselCard .text {
    width: 72%;

    & h3 {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_C};
      margin-bottom: 0;
    }

    & h4 {
      font-weight: 600;
      font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
    }

    & p {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
      line-height: 1.5rem;
    }
  }

  /* .ant-carousel .slick-prev,
  .ant-carousel .slick-next,
  .ant-carousel .slick-prev:hover,
  .ant-carousel .slick-next:hover {
    color: #3c8a42;
    background-color: #ccebce;
    border-radius: 32px;
    padding: 20px;
    height: 64px;
    width: 64px;
  }

  .ant-carousel .slick-slider .slick-list {
    height: 180px;
  } */

  /* .ant-carousel .slick-dots-bottom {
    display: none !important;
  } */

  .continue-with,
  .social-buttons {
    color: #928e8e;
    font-family: 'Lato-Medium', Helvetica;
    font-size: 14px;
    font-weight: 500;
    display: flex;
    column-gap: 10px;
    align-items: center;
    .social-icons {
      width: 30px;
      height: 30px;
      color: #000000;
    }
    .google {
      width: 35px;
      height: 35px;
    }
  }

  .loginOption {
    margin-top: 0.5rem;
    color: #0000007e;
    span {
      color: #0e56a2;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .noDisplayMob {
    display: inline-block;
  }
  @media all and (max-width: 768px) {
    .companyLogo {
      height: 3.5rem;
      img {
        height: 3.5rem !important;
      }
    }

    .section-1 {
      flex-direction: column;
      text-align: left;
      height: 100%;
      justify-content: center;
      width: 95%;

      .title {
        font-size: 1.5rem;
      }

      /* .subTitle {
        font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
      } */
      .p-3 {
        padding: 0;
        padding-top: 5rem;
      }
      .heroVideo {
        /* display: none; */
      }
      #animate {
        animation-duration: 3s;
        animation-delay: 2s;
      }

      #lock {
        animation-duration: 3s;
        animation-delay: 2s;
        position: absolute;
        left: 50%;
        top: -4px;
      }

      @keyframes lock {
        0% {
          margin: 0;
          opacity: 0;
        }
        50% {
          margin: 0;
          opacity: 1;
        }
        75% {
          margin: 0;
          opacity: 1;
        }
        100% {
          margin: 0;
          opacity: 0;
        }
      }

      .heroVideo {
        video {
          width: 100%;
        }
      }

      /* .heroBtn1 {
        display: none;
      } */
      .heroBtn2 {
        display: block;
      }
    }

    .p-3,
    .img {
      padding: 0 10%;
    }

    .w-50 {
      width: 100%;
    }
    .title {
      font-size: ${({ theme }) => theme.FONT_SIZES.MEDIUM_A};
      font-weight: 600;
    }
    .headline {
      font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_F};
    }
    .heroBtn {
      flex-direction: column;
      width: max-content;
      margin: 0 auto;
      section {
        margin: 0.75rem auto;
        /* margin-left: 0; */
        width: fit-content;
      }
    }

    .section-3 {
      .carouselCard {
        width: 90%;
      }
      .ant-carousel .slick-prev {
        left: -5px;
        z-index: 999;
      }

      .ant-carousel .slick-next {
        right: -5px;
        z-index: 999;
      }
    }

    /* .featuring-carousel {
      .ant-carousel .slick-prev {
        left: -40px;
        z-index: 999;
      }

      .ant-carousel .slick-next {
        right: -40px;
        z-index: 999;
      }
    } */

    .titleSec3 {
      font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_C};
      padding: 0;
    }
    .headlineSec2 {
      font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
      font-weight: 600;
    }
    .videoSec2 {
      width: 90%;
      margin: 0 auto;
      margin-top: 3rem;
    }
    .testmonials {
      overflow-x: scroll;
      width: inherit;
      padding: 1rem 0;
      display: -webkit-inline-box;
      section {
        width: 75%;
      }
    }
    /* .featuring-carousel {
      width: 75%;
      margin: 0 auto;
    } */
    /* .featuringImageContainer {
      img {
        width: 120px !important;
        height: 24px !important;
      }
    } */
    .testmonials {
      overflow-x: scroll;
      width: inherit;
      padding: 1rem 0;
      display: -webkit-inline-box;
      section {
        width: 45%;
      }
    }
    .carouselCard {
      flex-direction: column;
      text-align: center;
      margin: 0.5rem auto;
      padding: 0.5rem;
      .image {
        width: 8rem;
      }
    }
    .noDisplayMob {
      display: none;
    }
    .carouselCard .text {
      width: 100%;

      & p {
        font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_SMALL_G};
      }
    }

    .canvasIntro {
      .canvas-intro-heading {
        color: #ffffff;
        font-family: 'Montserrat-Black', Helvetica;
        font-size: 32px;
        font-weight: 900;
        @media (max-width: 768px) {
          font-size: 16px;
        }
      }
      .canvasIntroButtons {
        section {
          margin: 0 auto;
          margin-top: 1rem;
        }
        button {
          font-weight: 400;
          font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
        }
      }
    }
    .responsiveSpace {
      height: 4rem;
    }
  }
  .sectionTitle {
    margin-bottom: 0;
    color: #2f2f2f;
    font-family: 'Montserrat', Helvetica;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    padding: 1rem;
    background: transparent;

    @media all and (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const StyledSection2Landing = styled.section`
  background: linear-gradient(
    180deg,
    rgb(244.37, 253.73, 255) 0%,
    rgba(244.37, 253.73, 255, 0.19) 100%
  );
  text-align: center;
  padding: 3rem 0;

  .sectionTitle {
    margin-bottom: 0;
    color: #2f2f2f;
    font-family: 'Montserrat', Helvetica;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    padding: 1rem;
    background: transparent;
  }
  .switchBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
    p {
      color: #000;
      text-align: center;
      font-family: Montserrat;
      font-size: 2rem;
      font-weight: 700;
      text-transform: capitalize;
      margin: 0;
      padding: 0;
    }
    .enterpriseSwitch {
      margin: 0 2.5rem;
      margin-right: 1.5rem;
    }

    @media all and (max-width: 768px) {
      p {
        font-size: 19px;
        font-weight: 700;
      }
      .enterpriseSwitch {
        margin: 0 1rem;
        margin-right: 0.5rem;
      }
    }
  }
  .section-2 {
    display: flex;
    /* padding: 0 10%; */
    column-gap: 4rem;
    // align-items: center;
    justify-content: space-between;
    text-align: left;
    max-width: 1500px;
    margin: 0 auto;

    /* div {
      padding: 1rem 3rem;
      padding-top: 0;
    } */

    img {
      height: 12.5rem;
    }
    .imgContainer {
      text-align: center;
    }
    h4 {
      font-weight: 600;
      font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_E};
      margin: 0 auto;
      margin-top: ${({ theme }) => theme.SPACING.SMALL_E};
      line-height: 2.188rem;
    }

    p {
      font-weight: 400;
      font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_F};
      line-height: 2.188rem;
    }

    .section2Item {
      text-align: center;
      width: 33%;
      background-color: #ffffff;
      border-radius: 45px;
      box-shadow: inset 5px -5px 6px #0000000f;
      h4 {
        font-family: 'Montserrat';
        font-style: normal;
      }
    }
    .section2Item:nth-child(2),
    .section2Item:nth-child(1) {
      h4 {
        max-width: 13rem;
        margin: 0 auto;
        margin-top: ${({ theme }) => theme.SPACING.SMALL_E};
      }
      p {
        max-width: 13rem;
        margin: 0 auto;
      }
    }
  }

  @media all and (max-width: 768px) {
    .sectionTitle {
      font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_B};
    }
    .section-2 {
      flex-direction: column;
      text-align: center;
      padding: 0 5%;

      h4 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        line-height: 35px;
        font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_F};
      }
      p {
        font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_SMALL_G};
      }
      div {
        width: 100%;
      }
      .section2Item {
        width: 100%;
        h4 {
          font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
        }
        p {
          font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_SMALL_G};
        }
      }
    }
  }
`;
