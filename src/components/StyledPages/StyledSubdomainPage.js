import styled from 'styled-components';

const StyledSubdomainPage = styled.section`
  overflow-x: hidden;
  .navBackground {
    height: 91px;
    width: 100%;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 9;
  }
  .wrapper {
    max-width: 1275px;
    margin: 0 auto;
  }

  .profilePic {
    width: 95%;
    text-align: left;
    flex-wrap: nowrap;
    bottom: -10rem;
    left: 2rem;
    align-items: center;
    justify-content: space-between;
    .user-account-card-wrapper {
      padding: 0;
      margin: 0;
    }
    .userDetailsFlex {
      padding-top: 10.5rem;
      padding-left: 1rem;
      font-family: Lato, sans-serif;
      font-size: 1rem;
      .name,
      .username {
        font-size: 2rem;
        font-style: normal;
        font-weight: 400;
        text-transform: capitalize;
      }
      .username {
        text-transform: lowercase;
        font-size: 1.5rem;
        font-weight: 400;
      }
      .bio {
        max-height: 45px;
        overflow: hidden;
        max-width: 70%;
        margin-bottom: 1rem;
        line-height: 1.4rem;
        word-break: break-all;
      }
    }
    .followDetails {
      color: #555;
      font-family: Lato, sans-serif;
      font-size: 0.875rem;
      font-weight: 700;
      .spacebetween {
        margin-left: 2.25rem;
        .value {
          color: #333;
          font-family: Lato, sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          margin-left: 0.5rem;
        }
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
  .canvasContent {
    margin-top: 13rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ccc;
    margin-bottom: 3rem;
    .space-between {
      justify-content: space-between;
    }
    h3 {
      color: #000;
      font-family: Lato, sans-serif;
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    .viewAllBtn {
      color: #000;
      font-family: Lato, sans-serif;
      font-size: 1.5rem;
      font-weight: 600;
      cursor: pointer;
    }

    .allCanvas {
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
      justify-content: center;
    }

    .canvasCarousel {
      .ant-carousel .slick-prev,
      .ant-carousel .slick-next,
      .ant-carousel .slick-prev:hover,
      .ant-carousel .slick-next:hover {
        color: #000;
      }

      .ant-carousel .slick-dots-bottom {
        display: none !important;
      }
      .ant-carousel .slick-prev {
        left: -40px;
        z-index: 999;
      }

      .ant-carousel .slick-next {
        right: -40px;
        z-index: 999;
      }
    }

    .canvasCard {
      position: relative;
      transition: zoom 0.5s ease;
      width: max-content;
      :hover {
        box-shadow: none;
        position: absolute;
        top: -0.5rem;
        z-index: 9999999999999;
        zoom: 1.05;
      }
    }
  }
`;

export default StyledSubdomainPage;
