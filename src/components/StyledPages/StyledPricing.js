import styled from 'styled-components';

export const PricingPage = styled.section`
  margin-top: 9rem;
  h1,
  h2,
  h3,
  h4 {
      font-family: 'Nunito';
    /* text-align: center; */
  }
  h2 {
    // font-weight: 600;
    // font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_C};
  }
  p {
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    /* text-align: center; */
  }
  button {
    font-size: 18px !important;
    padding: 1.125rem 1.25rem !important;
    font-weight: 600 !important;
      font-family: 'Nunito' !important;
    border-radius: 40px !important;
  }
  .gradText {
    background: ${({ theme }) => theme.GRADIENT.PRIMARY_GRADIENT_B};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .pricingHeader {
    border-bottom: 1px solid #cccccc;
    max-width: 80rem;
    margin: 0 auto;
    margin-bottom: 3rem;
    p {
      font-size: 1rem;
    }
  }
  .pricing p {
    font-size: ${({ theme }) => theme.FONT_SIZES.MEDIUM_A};
    font-weight: 700;
    /* max-width: 60rem; */
    text-align: center;
    margin: 0 auto;
    &.subtext {
      font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_E};
      text-align: center;
      margin-top: 1rem;
      font-weight: 400;
    }
  }
  .small-text {
    button {
      font-size: 18px;
      padding: 0.5rem 2rem;
      border-radius: 40px;
    }
  }
  .pricing-lists {
    display: flex;
    max-width: 80rem;
    margin: 6.43rem auto;
    justify-content: space-between;
    text-align: left;
    .pricingListData {
      max-width: 12.5rem;
      .pricingIcon {
        text-align: center;
      }
    }
  }
  .pricing-lists .feature-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .action-item {
      padding-top: 2rem;
      text-align: center;
    }
  }
  .pricing-lists h5 {
    font-weight: 600;
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_E};
    margin-top: 5rem;
    margin-left: 1.6rem;
  }
  .pricing-lists ul {
    list-style: none;
    text-align: left;
    font-weight: 400;
    max-width: 22rem;
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_F};
    padding-left: 0;
    padding-right: ${({ theme }) => theme.SPACING.SMALL_B};
  }
  .pricing-lists ul li {
    display: flex;
    padding: 0.5rem 0;
    word-wrap: break-word;
  }
  .pricing-lists ul li:first-child {
    font-weight: 600;
  }
  .pricing-lists ul li .icon {
    width: 25px;
    text-align: left;
    padding-right: 10px;
  }

  @media all and (max-width: 768px) {
    margin-top: 1rem;
    .pricingHeader {
      padding-top: 2rem;
      width: 80%;
      h2 {
        font-weight: 500;
      }
    }
    .pricing p {
      font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_B};
      font-weight: 500;
      margin: 0 2rem;
      text-align: center;
      padding-bottom: 1rem;
      border-bottom: 1px solid
        ${({ theme }) => theme.BACKGROUND_COLORS.SECONDARY_2};
      display: none;
    }
    .pricing-lists {
      padding: 1rem;
      flex-direction: column;
      margin-top: 0;
      margin-bottom: 1rem;
      align-items: center;
      .pricingListData {
        max-width: inherit;
        display: flex;
        flex-direction: column;
        align-items: center;
        h5 {
          margin-top: 1rem;
          margin-left: 0 !important;
        }
      }
    }
    .pricing-lists > div {
      margin-bottom: 2rem;
    }
    .pricing-lists h5 {
      margin-top: 0;
    }
  }
`;
