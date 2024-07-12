import styled from 'styled-components';

export const StyledCreateNewEngagement = styled.section`
  font-family: 'Lato', sans-serif;
  font-color: ${({ theme }) => theme.FONT_COLORS.BLACK_2};

  .addCover {
    margin-right: ${({ theme }) => theme.SPACING.LARGE_B};
    background: #e5e5e5;
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.SMALL_B};
    width: 18.75rem;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .uploaded_image {
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.SMALL_B};
    width: 18.75rem;
    height: 8rem;
  }
  .addCoverText {
    background: ${({ theme }) => theme.BACKGROUND_COLORS.BROWN_0};
    padding: ${({ theme }) => theme.SPACING.SMALL_A};
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.SMALL_B};
    color: ${({ theme }) => theme.FONT_COLORS.WHITE};
    line-height: 0;
  }
  .head {
    display: flex;
    align-items: flex-start;
  }
  .headInput {
    width: 30rem !important;
  }
  .midSection {
    display: flex;
    margin-top: ${({ theme }) => theme.SPACING.SMALL_B};
  }
  .midSectionLeft {
    width: 50%;
    padding-right: ${({ theme }) => theme.SPACING.LARGE_B};
    border-right: 0.063rem solid
      ${({ theme }) => theme.BACKGROUND_COLORS.SECONDARY_2};

    textarea {
      opacity: 1 !important;
    }
  }
  .midSectionRight {
    width: 50%;
    padding-left: ${({ theme }) => theme.SPACING.LARGE_B};
    textarea {
      opacity: 1 !important;
    }
  }
  .benefitGroup {
    width: 200%;
  }
  .subscription {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .activateButtonContent {
    width: 50%;
  }
  .create {
    font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_SMALL_D} !important;
  }
  .bottom {
    display: flex;
  }
  .ant-upload-list {
    display: none !important;
  }
  .ant-select-arrow {
    height: 0.7rem !important;
    padding-right: 0rem !important;
  }
  .ant-input-wrapper {
    height: 2.813rem;
  }
  .ant-input {
    height: 2.813rem;
  }
  .adjustHeightValue span textArea {
    height: 130px;
  }
`;
