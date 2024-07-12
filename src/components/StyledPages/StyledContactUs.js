import styled from 'styled-components';
export const StyledContactUs = styled.section`
  .section-ContactUs {
    padding: 5rem 0;
  }
  .nameFlex {
    display: flex;
    justify-content: space-between;
    section {
      width: 45%;
    }
  }

  .rowFlex {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .section-ContactUs .heading {
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.FONT_COLORS.SECONDARY_2};
  }
  .section-ContactUs .heading h3 {
    font-weight: 500;
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_C};
  }
  .contactForm {
    margin-top: 2rem;
    max-width: 50%;
    /* border-right: 1px solid #ccc; */
    padding-right: 3rem;
    font-family: 'Work Sans', sans-serif;
  }
  .contactForm .seperateInput {
    height: 1rem;
  }
  .contactForm textarea {
    opacity: 1;
  }
  .contactForm {
    button {
      font-size: 1rem;
      padding: 1.1rem 1.5rem;
    }
  }
  .seperator {
    height: 400px;
    border-right: 1px solid #ccc;
  }
  .location-Info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 5rem;
  }

  & .phoneLabel {
    display: inline-block;
    margin-bottom: ${({ theme }) => theme.SPACING.EXTRA_SMALL_A};
    font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_SMALL_D};
    color: ${({ theme }) => theme.FONT_COLORS.TERTIARY_0};
    font-weight: 500;
    line-height: 1.063rem;
    ${props =>
      props.marginTop &&
      // eslint-disable-next-line sonarjs/no-nested-template-literals
      `
      margin-top: 1.2rem;
    `}
  }
  & .PhoneInputInput {
    background: ${({ theme }) => theme.BACKGROUND_COLORS.WHITE};
    border: 1px solid ${({ theme }) => theme.BACKGROUND_COLORS.SECONDARY_2};
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.EXTRA_SMALL_A};
    height: 2.5rem;
    color: ${({ theme }) => theme.FONT_COLORS.TERTIARY_0};
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
    line-height: 1.187rem;
    font-weight: 500;
    font-style: normal;
    font-family: Lato;
  }

  @media all and (max-width: 768px) {
    .section-ContactUs {
      padding: 0 1rem;
    }
    .contactForm {
      margin-bottom: 2rem;
      max-width: 100%;
    }
    .nameFlex {
      flex-direction: column;
      section {
        width: 100%;
      }
    }
  }
`;
