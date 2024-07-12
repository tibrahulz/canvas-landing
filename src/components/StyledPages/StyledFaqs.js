import styled from 'styled-components';

export const StyledFaqsPage = styled.section`
  margin-top: 10rem;
  .title {
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_C};
    padding-bottom: ${({ theme }) => theme.SPACING.EXTRA_SMALL_C};
    border-bottom: 0.094rem solid
      ${({ theme }) => theme.BACKGROUND_COLORS.LIGHT_GREY};
    line-height: 1.813rem;
    font-weight: 500;
    margin-bottom: ${({ theme }) => theme.SPACING.SMALL_C};
  }

  .sub-title {
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
    margin-bottom: ${({ theme }) => theme.SPACING.SMALL_C};
    line-height: 1;
    font-weight: 700;
  }

  .ques-container {
    display: flex;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.SPACING.SMALL_C};
    line-height: ${({ theme }) => theme.SPACING.SMALL_C};

    & svg {
      height: ${({ theme }) => theme.SPACING.EXTRA_SMALL_E};
      width: ${({ theme }) => theme.SPACING.EXTRA_SMALL_C};
      margin-right: ${({ theme }) => theme.SPACING.SMALL_A};
    }

    & span {
      margin-right: 0.25rem;
    }
  }

  .ans-text {
    font-weight: 500 !important;
    line-height: ${({ theme }) => theme.SPACING.SMALL_C};
    margin-bottom: ${({ theme }) => theme.SPACING.SMALL_C};

    p {
      margin-top: ${({ theme }) => theme.SPACING.SMALL_A};
    }
  }

  ol {
    counter-reset: foo 0;
    list-style-type: none;
  }
  ol li {
    counter-increment: foo 1;
  }
  ol li.dont-increment {
    counter-increment: foo 0;
  }
  ol li:before {
    content: counter(foo) '.';
    /* bells and whistles */
    float: left;
    width: 2em;
    margin-left: -2.5em;
    text-align: right;
  }

  @media all and (max-width: 768px) {
    margin-top: 0rem;
    margin-left: ${({ theme }) => theme.SPACING.MEDIUM_A};
    margin-right: ${({ theme }) => theme.SPACING.MEDIUM_A};

    .title {
      font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_B};
    }
  }
`;
