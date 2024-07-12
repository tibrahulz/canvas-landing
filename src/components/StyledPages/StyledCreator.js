import styled from 'styled-components';

export const StyledCreator = styled.section`
  position: relative;
  .sectionHero {
    background: ${({ theme }) => theme.BACKGROUND_COLORS.TERTIARY_0};
    padding-bottom: 4rem;
    min-height: 100vh;
    .navBackground {
      height: 81px;
      width: 100%;
      position: sticky;
      top: 38px;
      background: #000;
      z-index: 10;
    }
  }
  .section3 {
    background: ${({ theme }) => theme.BACKGROUND_COLORS.GREY_4};
    .navBackground {
      height: 81px;
      width: 100%;
      position: sticky;
      top: 38px;
      background: ${({ theme }) => theme.BACKGROUND_COLORS.GREY_4};
      z-index: 10;
    }
    .flex {
      display: flex;
    }
  }
  .section2Item {
    width: 50rem;
    :last-child {
      h4 {
        margin-top: 1.75rem;
      }
    }
  }
  .title {
    font-size: ${({ theme }) => theme.FONT_SIZES.LARGE_A};
    font-weight: 700;
    line-height: 1.2;
    font-family: 'Gotham', sans-serif;
    font-style: normal;
    color: ${({ theme }) => theme.FONT_COLORS.WHITE};
  }

  .companyLogo {
    margin-top: ${({ theme }) => theme.SPACING.LARGE_B};
    padding: 0 2%;
  }
  .heroSecBtn {
    section {
      border-radius: 15px;
    }
  }
  .section-1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.FONT_COLORS.WHITE};
  }
  .section-3 {
    margin: 0 auto;
    color: #000;
    .navBackground {
      height: 81px;
      width: 100%;
      position: sticky;
      top: 38px;
      background: ${({ theme }) => theme.BACKGROUND_COLORS.GREY_4};
      z-index: 10;
    }
  }

  .p-5 {
    padding: 0 5%;
  }

  .w-50 {
    width: 50%;
  }

  .w-70 {
    width: 70%;
  }

  .headline {
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_D};
    font-weight: 400;
    line-height: 2.188rem;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
  }

  .img {
    display: flex;
    justify-content: flex-end;
  }
  .imgSec3 {
    display: flex;
    justify-content: center;
    margin-right: 10rem;
  }
  .btn {
    margin-left: ${({ theme }) => theme.SPACING.SMALL_C};
    margin-top: ${({ theme }) => theme.SPACING.SMALL_C};
  }

  .headlineSec3 {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_E};
    text-align: left;
    line-height: 2.1rem;
  }
  .payblockText {
    font-family: 'Poppins', sans-serif;
    font-style: italic;
    font-weight: 700;
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_E};
    line-height: 2.1rem;
    background: ${({ theme }) => theme.GRADIENT.PRIMARY_GRADIENT};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .cultureCreators {
    margin: 5rem auto;
    margin-top: 0;
    .navBackground {
      height: 81px;
      width: 100%;
      position: sticky;
      top: 38px;
      background: ${({ theme }) => theme.BACKGROUND_COLORS.WHITE};
      z-index: 10;
    }
  }
  .titleSec3 {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: ${({ theme }) => theme.FONT_SIZES.MEDIUM_A};
    text-align: left;
    padding: 1rem 0;
  }

  .testmonials {
    display: flex;
    justify-content: space-between;
  }

  .d-none {
    display: none;
  }
  .d-none-mob {
    display: block;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
  }

  @media all and (max-width: 768px) {
    .companyLogo {
      display: none;
    }
    .section-1 {
      flex-direction: column-reverse;
      text-align: center;
      padding-top: 4rem;
    }
    .title {
      font-size: ${({ theme }) => theme.FONT_SIZES.MEDIUM_A};
      font-weight: 600;
    }
    .headline {
      font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_F};
    }
    .p-5 {
      padding: 0 1%;
    }
    .w-50,
    .w-70 {
      width: 90%;
    }
    .d-none {
      display: block;
    }
    .d-none-mob {
      display: none;
    }
    .titleSec3,
    .headlineSec3 {
      text-align: center !important;
    }
    .headlineTextSec3 {
      font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_SMALL_G} !important;
    }
    .testmonials {
      overflow-x: scroll;
      width: inherit;
      padding: 1rem 0;
      display: -webkit-inline-box;
      section {
        width: 45%;
      }
    }
  }

  @media all and (min-height: 768px) {
    .sectionHero {
      min-height: auto;
      padding-top: 3rem;
    }
  }
`;

export const StyledSection2 = styled.section`
  .navBackground {
    height: 81px;
    width: 100%;
    position: sticky;
    top: 38px;
    background: ${({ theme }) => theme.BACKGROUND_COLORS.WHITE};
    z-index: 10;
  }
  .section-2 {
    display: flex;
    background: ${({ theme }) => theme.BACKGROUND_COLORS.WHITE};
    padding: 0 10%;
    // align-items: center;
    justify-content: space-between;

    div {
      padding: 5%;
    }

    img {
      height: 12.5rem;
    }

    h4 {
      font-weight: 600;
      font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_E};
      margin-top: ${({ theme }) => theme.SPACING.SMALL_E};
      line-height: 2.188rem;
    }

    p {
      font-weight: 400;
      font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_F};
      line-height: 2.188rem;
    }
    .section-2_column {
      width: 33.33%;
    }
  }

  @media all and (max-width: 768px) {
    .section-2 {
      flex-direction: column;
      text-align: center;
      padding: 0 5%;

      h4 {
        font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_F};
      }
      p {
        font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_SMALL_G};
      }
      div {
        width: 100%;
      }
    }
  }
`;
