import styled from 'styled-components';

export const StyledConnectTheDots = styled.section`
  margin-top: 8rem;
  text-align: center;
  .eventHead {
    h2 {
      font-weight: 700;
      font-size: 2rem;
    }
    .subHeading {
      font-size: 1.5rem;
      font-weight: 500;
    }
    p {
      font-weight: 500;
      font-size: 1rem;
    }
    .blueText {
      color: ${({ theme }) => theme.FONT_COLORS.PRIMARY};
    }
    .greenText {
      color: ${({ theme }) => theme.FONT_COLORS.GREEN_0};
    }
  }
  .reasons {
    display: flex;
    justify-content: center;
  }
  .reasonItems {
    padding: 2rem;
    max-width: 15rem;
    p {
      font-weight: 400;
      font-size: 1rem;
    }
  }
  .whyWebinars {
    margin-bottom: 5rem;
    h3 {
      font-size: 1.5rem;
      font-weight: 500;
    }
    button {
      font-size: 1rem;
      font-weight: 700;
    }
  }
  .gradientText {
    background: linear-gradient(147.55deg, #0e56a2 26.38%, #00b3a6 98.75%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media all and (max-width: 768px) {
    padding: 1rem;

    .eventHead {
      h2 {
        font-size: 1.375rem;
      }
      .subHeading {
        font-size: 1rem;
      }
    }
    .whyWebinars {
      h3 {
        font-size: 1.375rem;
      }
      .reasons {
        flex-direction: column;
      }
      .reasonItems {
        margin: 0 auto;

        img {
          width: 100%;
        }
      }
    }
  }
`;
