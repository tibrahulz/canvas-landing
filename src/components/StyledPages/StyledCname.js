import styled from 'styled-components';

const StyledCname = styled.section`
  .box {
    background-color: transparent;
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .box .group-wrapper {
    border: 0px none;
    height: 65px;
    width: 480px;
  }

  .box .overlap {
    height: 65px;
    position: relative;
    width: 482px;
  }

  .box .username {
    height: 65px;
    left: 0;
    position: absolute;
    top: 0;
    width: 482px;
  }

  .box .text-wrapper {
    color: #000000;
    font-family: 'Lato-Bold', Helvetica;
    font-size: 14px;
    font-weight: 700;
    left: 0;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 0;
  }

  .box .overlap-group-wrapper {
    // height: 40px;
    left: 0;
    position: absolute;
    top: 25px;
    width: 482px;

    .input {
      width: fit-content;
      padding: 0px 5px;
      border: none;
      position: relative;
      // bottom: -1px;
      // left: 5px;
      background: none;
      color: #000000;
      &:focus-visible {
        border: none;
        outline: none;
      }
    }
  }

  .box .overlap-group {
    background-color: #ffffff;
    border: 1px solid;
    border-color: #cccccc;
    border-radius: 8px;
    // height: 40px;
    position: relative;
    width: 480px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .box .https-typesubdomain {
    color: transparent;
    font-family: 'Lato-SemiBold', Helvetica;
    font-size: 16px;
    font-weight: 600;
    left: 7px;
    position: relative;
    letter-spacing: 0;
    top: 7px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .box .span {
    color: #000000;
  }

  .box .text-wrapper-2 {
    color: #737373;
  }

  .box .img {
    height: 17px;
    left: 146px;
    position: absolute;
    top: 0;
    width: 17px;
  }

  .box .div-wrapper {
    background-image: url(./rectangle-40.svg);
    background-size: 100% 100%;
    height: 39px;
    left: 426px;
    position: absolute;
    top: 27px;
    width: 53px;
    background: #eae9e9;
    border-radius: 0 8px 8px 0;
  }

  .box .div {
    height: 20px;
    left: 18px;
    position: relative;
    top: 11px;
    width: 18px;
  }

  .box .overlap-group-2 {
    height: 20px;
    position: relative;
  }

  .box .rectangle {
    background-color: #ffffff;
    border: 2px solid;
    border-color: #00b3a6;
    border-radius: 4px;
    height: 17px;
    left: 0;
    position: absolute;
    top: 0;
    width: 16px;
  }

  .box .rectangle-2 {
    background-color: #ffffff;
    border: 2px solid;
    border-color: #00b3a6;
    border-radius: 4px;
    height: 17px;
    left: 4px;
    position: absolute;
    top: 3px;
    width: 14px;
  }

  .domainBtns {
    margin: 30px 0;
  }

  .domainSuccessPopUp {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.1);

    .successContainer {
      background: #fff;
      width: 40%;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      flex-direction: column;
      position: relative;
      color: black;
      padding-bottom: 20px;

      .textContainer {
        margin: 0 auto;
        margin-top: 50px;
        width: 100%;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h2 {
          color: #00b3a6;
          font-weight: bold;
        }
        p {
          text-align: center;
        }

        .textInfo {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          text-align: center;
        }
      }

      .iconContainer {
        background: #efefef;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        height: 80px;
      }

      .successIcon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        box-sizing: content-box;
        margin-top: 80px;
        height: ${({ theme }) => theme.SPACING.LARGE_A};
        width: ${({ theme }) => theme.SPACING.LARGE_A};
        background: ${({ theme }) => theme.BACKGROUND_COLORS.GREEN_2};
        border: ${({ theme }) => theme.SPACING.EXTRA_SMALL_A} solid;
        border-color: ${({ theme }) => theme.BACKGROUND_COLORS.GREEN_4};
        border-radius: ${({ theme }) => theme.BORDER_RADIUS.SMALL_C};
        & svg {
          height: ${({ theme }) => theme.SPACING.SMALL_D};
          width: ${({ theme }) => theme.SPACING.SMALL_D};
          color: ${({ theme }) => theme.FONT_COLORS.WHITE};
        }
      }
    }
  }
`;

export default StyledCname;
