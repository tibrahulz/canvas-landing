import styled from 'styled-components';
export const UserProfilePage = styled.section`
  .flex {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .cover {
    width: 100%;
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.SMALL_D};
    height: 35vh;
    position: relative;
    background: #f5f5f5;
    margin-bottom: ${({ theme }) => theme.SPACING.LARGE_A};
    background-repeat: no-repeat;
    background-size: cover;
  }
  .cover-img-btn {
    position: absolute;
    right: 1.68rem;
    bottom: 1.68rem;
  }
  .change-btn {
    display: inline;
    margin-right: 0.5rem;
  }
  .change-btn label {
    border: 1px solid #7c6f73 !important;
    background: #7c6f73 !important;
    color: #fff;
    cursor: pointer;
    padding: 0.375rem 1.5rem;
    border-radius: 1rem;
  }
  .profilePic {
    position: absolute;
    left: 0rem;
    bottom: -7.125rem;
    width: 25%;
    text-align: center;
  }
  .imageActionsContainer {
    position: absolute;
    bottom: 1%;
    right: 0;
    width: 9.375rem;
    display: flex;
    justify-content: space-evenly;
    z-index: 100 !important;
  }

  .profileDetails {
    width: 25%;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-top: 2.5rem;
    position: sticky;
    top: ${props => (props.user ? '2.5rem' : '7.5rem')};
    z-index: 1000;

    .username {
      font-weight: 500;
      margin-bottom: 0.3rem;
    }
    .emailDetails {
      color: gray;
      margin-bottom: 0.3rem;
    }
    .bio {
      border-radius: ${({ theme }) => theme.BORDER_RADIUS.SMALL_B};
      background: #f5f5f5;
      padding: ${({ theme }) => theme.SPACING.EXTRA_SMALL_E};
      font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_SMALL_D};
      margin: 0.3rem ${({ theme }) => theme.SPACING.SMALL_D};
      width: 90%;
      max-height: 7rem;
      overflow-y: scroll;
      overflow-wrap: anywhere;
    }
    .bio::-webkit-scrollbar {
      display: none;
    }
    hr {
      width: 80%;
      margin: 1rem 0rem;
      background-color: #777777;
      opacity: 0.5;
    }
    .followButton {
      border-radius: ${({ theme }) => theme.BORDER_RADIUS.SMALL_B};
      background-color: #e3ebf2;
      color: #2366a0;
      margin-bottom: 0.8rem;
    }

    .followDetails {
      flex-direction: column;
      font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_SMALL_D};
      width: 100%;
      align-items: initial;
      width: 80%;
      color: #555555;
    }
    .spacebetween {
      justify-content: space-between;
    }
    .bold {
      font-weight: bold;
    }
    .margin-bottom {
      margin-bottom: 0.8rem;
    }
  }

  .alignCenter {
    align-items: flex-start;
  }

  .canvases {
    width: 75%;
    background: white;
  }

  .route-label-tabs {
    position: sticky;
    top: ${props => (props.user ? '0' : '7rem')};
    z-index: 1000;
    background: ${({ theme }) => theme.BACKGROUND_COLORS.WHITE};
  }

  .header-wrapper {
    position: sticky;
    top: ${props => (props.user ? '3.688rem' : '10.688rem')};
    z-index: 1000;
    background: ${({ theme }) => theme.BACKGROUND_COLORS.WHITE};
    padding-bottom: ${({ theme }) => theme.SPACING.SMALL_A};
  }

  .width-50 {
    width: 40%;
  }

  .canvasList {
    flex-direction: row;
    justify-content: start;
  }
  .ant-tabs-tab {
    padding-top: 0px;
  }

  .children-container {
    section {
      padding-top: 0px;
      padding-bottom: 0px;
    }
  }

  .mtb-32 {
    margin: ${({ theme }) => theme.SPACING.MEDIUM_A};
  }

  .no-canvas {
    text-align: center;
    width: 100%;

    .no-canvas-button {
      color: ${({ theme }) => theme.FONT_COLORS.WHITE};
      border: ${({ theme }) => theme.FONT_COLORS.PRIMARY};
    }

    & .ant-btn-primary {
      background: ${({ theme }) => theme.BACKGROUND_COLORS.GREY_5} !important;
      padding: 1.1rem 1.2rem !important;
      margin-top: ${({ theme }) => theme.SPACING.SMALL_C};

      span {
        font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
        font-weight: 600;
        line-height: 1.24rem;
        font-family: 'Montserrat', sans-serif;
      }
    }
  }

  @media all and (max-width: 768px) {
    .cover {
      width: 95%;
      margin: 0 auto;
      margin-top: 1rem;
    }
    .flex {
      flex-direction: column;
    }
    .profilePic {
      width: 100%;
      bottom: -5rem;
    }
    .profileDetails {
      width: 100%;
      margin-top: 4rem;
      z-index: 998;
      .username {
        margin-top: 1rem;
      }
    }
    .followDetails {
      width: 10rem !important;
      .flex {
        flex-direction: row;
      }
    }
    .canvases {
      width: 100%;
      z-index: 999;
      .ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap {
        justify-content: center;
      }
    }
    .header-wrapper {
      flex-direction: column-reverse;
    }

    .search-box {
      width: 90%;
      display: flex;
      justify-content: center;
      margin-bottom: 0.5rem;
    }

    .change-btn {
      margin-right: 0rem;
      position: relative;
      z-index: 9;
    }

    .width-50 {
      width: 90%;
    }
  }
`;
