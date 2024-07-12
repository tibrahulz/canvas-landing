import styled from 'styled-components';

const StyledPublishCanvas = styled.section`
  .headerWithButtons {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .rightBtns {
      margin-right: 2rem;
      button {
        font-weight: 600;
        font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
        margin: 0 1rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
    }
  }
  .promocodeInput {
    position: relative;
    .copyBtn {
      color: #00b3a6;
      position: absolute;
      right: 10px;
      top: 55%;
      cursor: pointer;
      font-size: 1.25rem;
    }
    .copied {
      position: absolute;
    }
  }
  .checkBoxMicroForm {
    display: flex;
    justify-content: space-between;

    font-weight: 500;
    font-size: 16px;
    label {
      padding-left: 0.5rem;
    }
  }
  .isQuerryCheckBox {
    font-weight: 500;
    font-size: 16px;
    margin-top: 1rem;
    label {
      padding-left: 0.5rem;
    }
  }
  .headerTitle {
    div {
      span {
        font-weight: 700;
        font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_F};
      }
    }
  }
  .start-end-text {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  .remove_payblock_button {
    padding: 0.7rem 0 0;
    border: none;
    background: transparent;

    position: absolute;
    top: 80px;
    cursor: pointer;
    z-index: 11;
    right: 49px;
  }

  .remove_payblock_button .shield {
    width: 1.5rem;
  }

  .audio_lock_form {
    position: relative;
  }

  .audio-wrapper .play-button {
    position: absolute;
    left: -31px;
  }
  .audio_btn {
    width: 100%;
    background: transparent;
    border: none;
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 1;
    left: 0;
  }
  .container {
    display: flex;
    .preview {
      width: 30%;
      min-width: 18.75rem;
      .previewCard {
        max-width: 18.75rem;
        height: 21.875rem;
        background: url('/images/emptyCoverCanvas.png');
        background-size: cover;
        border-radius: ${({ theme }) => theme.BORDER_RADIUS.SMALL_B};
        margin: 1rem auto;
      }
      .previewOptions {
        max-width: 18.75rem;
        margin: 1rem auto;
        display: flex;
        justify-content: space-between;
        button {
          margin: 0;
          font-weight: 500;
          font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_SMALL_G};
          color: #39559c;
          cursor: pointer;
          border: none;
          background: transparent;
          text-transform: capitalize;
        }
      }
    }
    .publishFormContainer {
      width: 65%;
      max-width: 800px;
      padding-left: 2rem;
      .publishForm {
        width: 100%;
        .creators-header {
          width: 100%;
          div {
            display: flex;
            justify-content: space-between;
            align-items: center;

            section {
              margin-bottom: 0;
            }
          }
          .inputCoCreator {
            width: 100%;
            section {
              width: 100%;
              margin-top: 0.5rem;
              div {
                width: 100%;
              }
            }
          }
        }
        .flex-wrap {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
        }
        .star {
          color: red;
        }
        .seperate {
          height: 1rem;
        }
        .ant-input {
          opacity: 1;
          font-weight: 400;
        }
        label {
          font-weight: 500;
          font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
        }
        .ant-select-arrow {
          height: auto !important;
        }
        .image-video-container {
          display: flex;
          flex-direction: row;
        }
        .paidContainer {
          p {
            font-weight: 500;
            margin: 0;
            margin-top: 1.5rem;
          }
        }

        .formBtnContainer {
          margin: 2.5rem 0;
          display: inline-block;
          button {
            padding: 1rem;
          }
          button,
          span {
            font-weight: 700;
            font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A} !important;
          }
          .ant-btn-round.ant-btn-lg {
            height: 2rem;
          }
        }
      }
    }
  }

  .error-icon svg {
    background: red;
  }

  .documentTypeContainer {
    width: fit-content;
    margin: 1.5rem auto 0;
    position: relative;
    left: -0.6rem;
  }

  #range-slider {
    width: 100%;
    height: 60px;
    background: #666;
    overflow: hidden;
    margin-top: 0.7rem;
    border-radius: 10px;
  }

  #range-slider .range-slider__thumb {
    width: 10px;
    height: 38px;
    border-radius: 10px;
    background: linear-gradient(
      180deg,
      rgb(245, 132, 31) 0%,
      rgb(241.19, 200.95, 97.48) 40.11%,
      rgb(0, 179, 166) 68.75%,
      rgb(90.7, 95.45, 209.31) 100%
    );
    background-repeat: no-repeat;
    background-position: center;
  }

  #range-slider .range-slider__range {
    border-radius: 10px;
    background: transparent;
    border: 4px solid #fff;
    box-sizing: border-box;
    box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.75);
  }
`;

export default StyledPublishCanvas;
