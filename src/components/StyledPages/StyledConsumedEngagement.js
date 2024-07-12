import styled from 'styled-components';
export const StyledConsumedEngagement = styled.section`
  font-family: 'Lato', sans-serif;
  box-sizing: border-box;
  .userImage {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin-right: 0.75rem;
  }
  .wholeBody {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 90vh;
    width: 100%;
    position: relative;
  }
  .leftBody {
    /* position: fixed; */
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .flex2 {
    display: flex;
    align-items: center;
  }
  .flex3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .userInfo {
    margin-left: ${({ theme }) => theme.SPACING.EXTRA_SMALL_D};
  }
  .bodyContent {
    margin-left: ${({ theme }) => theme.SPACING.LARGE_C};
    width: 18.75rem;
    margin-top: -1rem;
  }
  .cardImage {
    width: 100%;
    height: 6.875rem;
    border-radius: 0.625rem;
    margin-top: ${({ theme }) => theme.SPACING.MEDIUM_D};
  }
  .about {
    margin-top: ${({ theme }) => theme.SPACING.SMALL_A};
    h3 {
      font-weight: 700;
      font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_SMALL_D};
    }
    p {
      font-weight: 400;
      font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_SMALL_F};
      color: ${({ theme }) => theme.FONT_COLORS.EXTRA_BLACK_2};
    }
  }
  .subscriptionDetail {
    h3 {
      font-weight: 700;
      font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_SMALL_D};
      margin-bottom: 1rem;
    }
    p {
      line-height: 1rem;
    }
  }
  .price {
    margin-left: ${({ theme }) => theme.SPACING.SMALL_A};
  }
  .subscribeBtn {
    margin-top: 2rem;
    border: 0.063rem solid ${({ theme }) => theme.BACKGROUND_COLORS.PRIMARY};
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.LARGE_C};
    background: #f2eae3;
    padding: 0.5rem 1rem;
    color: #c37531;
    cursor: pointer;
  }
  .line {
    border: 0.063rem solid #777777;
    margin: 1rem 0;
    opacity: 0.2;
  }
  .marginBottom {
    margin-bottom: 1rem;
  }
  .canvasCards {
    right: 0px;
    height: 90vh;
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    margin-left: ${({ theme }) => theme.SPACING.LARGE_C};
  }
  .canvasCards::-webkit-scrollbar {
    display: none;
  }
  .subscribed {
    background: #f4f3f3;
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.EXTRA_SMALL_G};
    padding: 1rem 0.5rem;
    margin-bottom: 1.5rem;
  }
  .cancel {
    color: ${({ theme }) => theme.FONT_COLORS.PRIMARY};
    cursor: pointer;
  }
  .noCanvas {
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
    margin-top: ${({ theme }) => theme.SPACING.SMALL_A};
  }
  .noCanvasSection {
    margin: auto;
  }
  .noCanvasImage {
    width: 22rem;
  }
  .editButton {
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.EXTRA_SMALL_A};
    background: ${({ theme }) => theme.BACKGROUND_COLORS.SECONDARY_5};
    padding: 0.3rem 1rem;
    cursor: pointer;
  }
  .editPen {
    margin-right: ${({ theme }) => theme.SPACING.EXTRA_SMALL_A};
  }
  .editText {
    margin-bottom: 0px !important;
    color: ${({ theme }) => theme.FONT_COLORS.PRIMARY};
  }

  .draftContainer {
    max-width: max-content;
    margin: 0 auto;

    h3 {
      font-weight: 600;
      text-align: center;
    }
    p {
      text-align: center;
    }
  }

  @media all and (max-width: 768px) {
    .wholeBody {
      height: max-content;
      flex-direction: column;
    }
    .canvasCards {
      height: max-content;
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      margin-left: 0;
      width: 95%;
    }
  }
`;
