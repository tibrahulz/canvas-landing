import styled from 'styled-components';
export const AccountPage = styled.section`
  padding-bottom: 2rem;
  .flex {
    display: flex;
    align-items: flex-start;
  }
  .justifyBetween {
    justify-content: space-between;
  }
  .topHeading {
    font-weight: 700;
  }
  .imageWrapper {
    width: 6rem;
    height: 6rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .width50 {
    width: 50%;
  }
  .columnLeft {
    border-right: 0.063rem solid #c8c8c8;
    padding-right: ${({ theme }) => theme.SPACING.SMALL_D};
    label {
      margin-top: 1rem;
    }
    .user-account-card-wrapper {
      margin: 1rem 0;
    }

    .billingBtn {
      font-weight: 400;
      font-size: 0.875rem;
      text-decoration: underline;
      margin-top: 1rem;
      cursor: pointer;
      color: #000;
    }
  }
  .columnRight {
    padding: ${({ theme }) => theme.SPACING.SMALL_D};
    label {
      margin-top: 1.2rem;
    }
    canvas {
      border-radius: 50%;
    }
  }
  .bold {
    font-weight: 700;
    margin-top: 1.2rem;
    margin-bottom: 0px;

    span {
      margin-right: ${({ theme }) => theme.SPACING.SMALL_B};
    }
  }

  .iconPencil {
    background: lightgray;
    border-radius: 0.4rem;
    padding: 0.3rem;
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_C};
    cursor: pointer;
    vertical-align: middle;
  }

  .marginLeft {
    margin-left: ${({ theme }) => theme.SPACING.EXTRA_SMALL_C};
  }

  .buttons {
    margin-top: 1rem;
  }

  .cancelButton {
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_B};
    margin-left: ${({ theme }) => theme.SPACING.EXTRA_SMALL_B};
  }

  .iconsInputWrapper {
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;

    section {
      width: 100%;
    }
  }

  .iconPosition {
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
    z-index: 1;
  }

  @media all and (max-width: 768px) {
    .flex {
      flex-direction: column;
      padding: 1rem;
    }
    .width50 {
      width: 100%;
    }
    .columnLeft {
      border-right: none;
      padding-right: 0;
      border-bottom: 0.063rem solid #ccc;
      padding-bottom: 1rem;
    }
    .topHeading {
      padding: 1rem;
    }
    .columnRight {
      padding: 0rem;
    }
  }
`;

export const StyledLogoModal = styled.section`
  width: 100%;
  canvas {
    border-radius: 50%;
    margin: 0 auto;
    position: relative;
    left: 25%;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    padding-top: 0;
    border-bottom: 2px solid #e5e5e5;
    margin-bottom: 2rem;

    .text-wrapper {
      color: #000;
      font-family: Lato, sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
    }
  }
  .imageActionsContainer {
    section {
      width: 100%;
      /* margin: 0 auto; */
    }
    button {
      border-radius: 1rem;
      font-size: 0.875rem !important;
      position: relative;
      left: 10%;
      padding: 1rem 2rem;
    }
  }
`;
