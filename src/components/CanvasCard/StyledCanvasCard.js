import styled from 'styled-components';

export const StyledCanvasCard = styled.section`
  position: relative;
  margin: 1rem;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.SMALL_D};
  width: 20rem;
  height: 21.875rem;
  background-image: ${props => `url(${props.image})`};
  transition: box-shadow 0.4s ease-in-out;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  p {
    margin-bottom: 0rem !important;
  }

  .layer {
    background-color: ${({ theme }) => theme.BACKGROUND_COLORS.TERTIARY_0_70};
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.SMALL_D};

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .canvasCardBody {
    padding: 1.25rem;
    .options {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: absolute;
      right: 0.25rem;
      top: 3.2rem;
      width: 6.93rem;
      max-height: 7.5rem;
      background-color: ${({ theme }) => theme.BACKGROUND_COLORS.WHITE};
      border-radius: 0.625rem;
      padding: 1rem;
      height: max-content;
    }
    .option {
      line-height: 1rem;
      cursor: pointer;
      padding: 0.25rem;
      padding-left: 0;
      font-size: 14px;
      display: flex;
      align-items: center;
      :hover {
        background-color: ${({ theme }) => theme.BACKGROUND_COLORS.SECONDARY_1};
      }
    }
    .shareOption::before,
    .deleteOption::before,
    .duplicateOption::before {
      content: url('/images/share.svg');
      height: 12px;
      width: 12px;
      padding-right: 1.25rem;
    }
    .deleteOption::before {
      content: url('/images/deleteIcon.svg');
    }
    .duplicateOption::before {
      content: url('/images/duplicateIcon.svg');
    }
    .icon {
      position: absolute;
      right: 0.625rem;
      top: 1.5rem;
      width: 1.75rem;
      height: 1.75rem;
      cursor: pointer;
      color: ${({ theme }) => theme.FONT_COLORS.SECONDARY_1};
      border-radius: 0.5rem;
      padding: 0.25rem;
      z-index: 9999999;
    }
    .onActiveThreeDot {
      border-radius: 50%;
      background: rgba(217, 217, 217, 0.5);
    }
  }
  .heading {
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_B};
    font-weight: bold;
    margin-bottom: ${({ theme }) => theme.SPACING.EXTRA_SMALL_A};
    color: ${({ theme }) => theme.FONT_COLORS.WHITE};
    word-break: break-all;
    img {
      margin-right: 10px;
      width: 28px;
    }
  }
  .subCanvas {
    display: inline-block;
    cursor: pointer;
    .description {
      margin: ${({ theme }) => theme.SPACING.EXTRA_SMALL_H} 0;
      font-weight: medium;
      color: ${({ theme }) => theme.FONT_COLORS.SECONDARY_2};
    }
    :hover {
      background: ${({ theme }) => theme.BACKGROUND_COLORS.GREY_1};
      padding: 0 ${({ theme }) => theme.SPACING.EXTRA_SMALL_A}
        ${({ theme }) => theme.SPACING.EXTRA_SMALL_A} 0;
      border-radius: ${({ theme }) => theme.BORDER_RADIUS.EXTRA_SMALL_F};
    }
  }
  .subCanvasBox {
    cursor: auto;
    background: ${({ theme }) => theme.BACKGROUND_COLORS.WHITE};
    width: 80%;
    height: 21.875rem;
    overflow-y: scroll;

    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    padding: ${({ theme }) => theme.SPACING.SMALL_A};
    border-top-right-radius: ${({ theme }) => theme.BORDER_RADIUS.SMALL_D};
    border-bottom-right-radius: ${({ theme }) => theme.BORDER_RADIUS.SMALL_D};
    border-top-left-radius: ${({ theme }) => theme.BORDER_RADIUS.SMALL_A};
    border-bottom-left-radius: ${({ theme }) => theme.BORDER_RADIUS.SMALL_A};
  }

  .subCanvasImage {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.EXTRA_SMALL_A};
    margin-right: ${({ theme }) => theme.SPACING.SMALL_A};
  }
  .subCanvases {
    display: flex;
    align-items: center;
    margin-top: ${({ theme }) => theme.SPACING.SMALL_A};
  }
  .descriptions {
    margin-top: ${({ theme }) => theme.SPACING.SMALL_A};
    margin-bottom: ${({ theme }) => theme.SPACING.SMALL_A} !important;
    font-weight: medium;
    color: ${({ theme }) => theme.FONT_COLORS.SECONDARY_2};
  }
  .btn_area {
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 50px;
  }
  .play-button {
    background: #f27b7b;
    border: 2px solid #f7c0c0;
    box-shadow: 0px 4px 7px 1px rgba(0, 0, 0, 0.35);
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .play-button .icon {
    height: 35px;
    width: 35px;
    fill: #fff;
  }
  .footer-canvas {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem;
    position: absolute;
    width: 100%;
    bottom: 0.3rem;
  }
  .userCard {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .userName {
    font-weight: medium;
    color: ${({ theme }) => theme.FONT_COLORS.SECONDARY_2};
    padding: 0 0 0 0.5rem;
  }
  .userImage {
    width: 1.875rem;
    height: 1.875rem;
    border-radius: 50%;
  }
  .shareCanvasCard {
    background: ${({ theme }) => theme.BACKGROUND_COLORS.WHITE};
    padding: 0.5rem 0.625rem;
    width: 17.5rem;
    height: 8rem;
    margin: 0 auto 0.625rem;
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.SMALL_A};
    position: absolute;
    bottom: 0.3rem;
    left: 0.6rem;
  }
  .shareCanvasCardTitle {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .shareCanvas {
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .copy {
    height: 2.5rem;
    display: flex;
    border-right: 0.06rem solid;
    align-items: center;
  }
  .share {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .canvasType {
    display: flex;
    align-items: center;
  }
  .shareIcon {
    width: 1.5rem;
    height: 1.5rem;
  }
  .closeBtn {
    height: 1.125rem;
    width: 1.125rem;
    cursor: pointer;
  }
  .copyBtn {
    height: 1.125rem;
    width: 1.125rem;
    cursor: pointer;
    margin-right: 0.5rem;
  }
  .shareBtn {
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .copied {
    color: ${({ theme }) => theme.FONT_COLORS.GREEN_0};
  }
  // :hover {
  //   box-shadow: 0px 0px 1rem 0.5rem rgba(0, 0, 0, 0.3);
  // }

  @media all and (max-width: 768px) {
    width: 95%;
  }
`;
export const CanvasCardTags = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  p {
    margin-bottom: 0rem !important;
  }
  .tags {
    display: inline;
    padding: 0 0.5rem;
    height: 1.25rem;
    background: ${({ theme }) => theme.TAG_COLORS.GREEN_6};
    font-weight: bold;
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.EXTRA_SMALL_A};
    margin-right: 0.5rem;
  }
  .microTags {
    display: inline;
    padding: 0 0.5rem 0 1.8rem;
    height: 1.25rem;
    background: ${({ theme }) => theme.TAG_COLORS.GREEN_0};
    font-weight: bold;
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.EXTRA_SMALL_A};
  }
  .value {
    display: flex;
    // margin-left: 0.5rem;
    align-items: center;
    padding: 0 0.5rem;
    height: 1.25rem;
    font-weight: bold;
    background: ${({ theme }) => theme.TAG_COLORS.YELLOW_2};
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.EXTRA_SMALL_A};
  }
  .flex {
    display: flex;
  }
  .block {
    display: block;
  }
  .free {
    padding: 0 0.5rem;
    font-weight: bold;
    background: ${({ theme }) => theme.TAG_COLORS.YELLOW_0};
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.EXTRA_SMALL_A};
  }
  .canvasViews {
    margin-top: ${({ theme }) => theme.SPACING.SMALL_A};
    margin-bottom: ${({ theme }) => theme.SPACING.SMALL_A} !important;
    font-weight: medium;
    color: ${({ theme }) => theme.FONT_COLORS.SECONDARY_2};
  }
  .microValue {
    display: flex;
    align-items: center;
    position: relative;
    // margin-left: 0.5rem;
    padding: 0 0.5rem 0 2rem;
    height: 1.25rem;
    font-weight: bold;
    background: ${({ theme }) => theme.TAG_COLORS.YELLOW_0};
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.EXTRA_SMALL_A};
  }
  .language {
    display: inline;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    padding: 0 0.5rem;
    font-weight: bold;
    background: ${({ theme }) => theme.TAG_COLORS.BLUE_1};
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.EXTRA_SMALL_A};
    color: ${({ theme }) => theme.FONT_COLORS.WHITE};
  }
  .microNft {
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
  }
  .micro {
    position: absolute;
    z-index: 100;
    display: flex;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.TAG_COLORS.GREEN_0};
    border: 0.125rem solid ${({ theme }) => theme.BACKGROUND_COLORS.WHITE};
  }
  .micropaid {
    position: absolute;
    top: 1;
    left: 0;
    z-index: 100;
    display: flex;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.TAG_COLORS.YELLOW_0};
    border: 0.125rem solid ${({ theme }) => theme.BACKGROUND_COLORS.WHITE};
  }
  .draft {
    margin-top: 0.5rem;
    display: inline;
    padding: 0 0.5rem;
    background: ${({ theme }) => theme.TAG_COLORS.GREY_0};
    font-weight: bold;
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.EXTRA_SMALL_A};
  }
  .engagementGroup {
    margin-top: 1rem;
    display: flex;
    align-items: center;
  }
  .engagement {
    display: block;
    position: relative;
    padding: 0 0.5rem 0.125rem 2rem;
    height: 1.25rem;
    background: ${({ theme }) => theme.TAG_COLORS.BLUE_0};
    font-weight: bold;
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.EXTRA_SMALL_A};
  }
  .group {
    position: absolute;
    /* top: ; */
    z-index: 100;
    display: flex;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.TAG_COLORS.BLUE_0};
    border: 0.125rem solid ${({ theme }) => theme.BACKGROUND_COLORS.WHITE};
  }
`;
