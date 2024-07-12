import styled from 'styled-components';

export const StyledMoonshot = styled.section`
    padding: 70px 0 120px;
  .wrapper {
    max-width: 1100px;
    margin: 0 auto;
  }
  .navSeperate {
    height: 81px;
    position: sticky;
    top: 0;
    background: #fff;
  }
  .rowFlex {
    display: flex;
    align-items: center;
  }
  h1,
  h2,
  h3,
  h4 {
      font-family: 'Nunito';
    text-align: center;
  }
  h2 {
    // font-weight: 600;
    // font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_C};
  }
  p {
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    text-align: center;
  }
  button {
    // font-size: 18px !important;
    // padding: 1.125rem 1.25rem !important;
    // font-weight: 600 !important;
    //   font-family: 'Nunito' !important;
    // border-radius: 40px !important;
  }
  video,
  iframe {
    border-radius: 10px;
    height: 270px;
    max-width: 480px;
    width: 100%;
  }
  .hero {
    // margin-bottom: 5rem;
    h2 {
      margin: 0 auto;
      font-size: 1.5rem;
    }
    .canvasCards {
      margin-top: 0.5rem;
      justify-content: center;
      p {
        text-align: left;
      }
    }
  }
  .featuring-carousel {
    // width: 85%;
    .ant-carousel .slick-prev,
    .ant-carousel .slick-next,
    .ant-carousel .slick-prev:hover,
    .ant-carousel .slick-next:hover {
      color: #000;
    }
    .ant-carousel .slick-slider .slick-list {
      min-height: 270px;
    }
    .ant-carousel .slick-dots-bottom {
      display: none !important;
    }
    .ant-carousel .slick-prev {
      left: 250px;
      z-index: 999;
    }

    .ant-carousel .slick-next {
      right: 250px;
      z-index: 999;
    }
  }
  .creativeShot {
   
  padding: 70px 0 120px;
    background: #fafafa;
    text-align: center;

    video {
      max-width: 640px;
      width: 100%;
      height: 270px;
      margin-bottom: 2rem;
    }
  }
  .endSection {
    text-align: center;
    margin: 4rem auto;
    p {
      font-weight: 800;
      font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_F};
      margin-top: 1rem;
      color: #797575;
    }
  }

  @media all and (max-width: 768px) {
    // margin-top: 2rem;
    
    video {
      width: 90%;
    }
    .canvasCards {
      flex-direction: column;
    }
    .creativeShot {
      padding: 2rem;
    }
  }
`;
