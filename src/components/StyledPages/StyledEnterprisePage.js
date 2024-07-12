import styled from 'styled-components';

export const StyledEnterprisePage = styled.section`
  .main-title-wrapper {
    padding: 5rem 0 0rem;
    @media (max-width: 768px) {
      padding: 5rem 0.5rem 1rem;
    }
  }

  .enterprise-sections-title {
    text-transform: capitalize;
    padding: 0;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px #868686;
    background: linear-gradient(
      180deg,
      rgb(125.61, 145.4, 183.81) 0%,
      rgba(44.2, 204, 88.94, 0.98) 36.55%,
      rgba(137.89, 201.8, 93.97, 0.99) 77.79%,
      rgb(224.19, 195.83, 95.28) 100%
    );
    background-clip: text;
    color: transparent;
    font-family: 'Montserrat', Helvetica;
    font-size: 48px;
    font-weight: 900;
  }
  .bg-fill {
    display: flex;
    /* justify-content: center; */
    height: 792px;
    flex-direction: column;
    background-image: url('/bg-img/heroBackground.svg'),
      url('/bg-img/bg - stroke.png');
    background-size: 90%;
    align-items: center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    padding-top: 73px;
    .content-wrapper {
      text-align: center;
      max-width: 80%;
      .explore-btn {
        display: none;
      }
      .text-wrapper {
        font-family: 'Montserrat-Medium', Helvetica;
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 0;
        margin-top: 0;
      }
      .input-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 0rem;
        .email-input {
          width: 594px;
          border-radius: 50px;
          margin: 38px 0;
          padding-right: 4px;
        }
      }
      .heroGif {
        border-radius: 0.5rem;
        margin-top: 1rem;
      }
      @media (max-width: 768px) {
        .email-input {
          width: 90%;
        }

        .text-wrapper {
          font-size: 14px;
        }
      }
      @media (min-width: 1290px) {
        max-width: 80%;
      }
    }
  }
  @media (max-width: 768px) {
    .enterprise-sections-title {
      font-size: 19px;
    }
    .bg-fill {
      background-image: url('/images/mobHero.svg'),
        url('/bg-img/bg - stroke.png');
      background-position: center;
      background-size: cover;
      justify-content: center;
      /* height: 500px; */
      .content-wrapper {
        max-width: 100%;
        width: 100%;
        padding: 0 0.75rem;
        .explore-btn {
          display: block;
          margin: 2rem auto;
        }
        .input-wrapper {
          flex-direction: column;
          .email-input {
            align-self: center;
            width: auto;
            margin-bottom: 0;
            padding-right: 4px;
          }
          .arrow-icon-wrapper {
            margin-right: 4rem;
            transform: rotate(90deg);
            /* .arrow-icon {
            } */
          }
        }
      }
    }
  }
  .preview-section {
    text-align: center;
    background-color: #fffef9;
    padding: 6rem 0;
    .sub-title-for-mobile {
      display: none;
    }
    .enterprise-sections-subtitle {
      font-family: 'Montserrat', Helvetica;
      font-size: 20px;
      font-weight: 500;
    }
    iframe {
      border-radius: 10px;
      margin: 3rem 0;
    }
    @media (max-width: 768px) {
      padding: 6rem 1rem;
      .not-hero {
        font-size: 32px;
        padding-bottom: 1rem;
      }
      .sub-title-for-mobile {
        display: block;
        text-transform: capitalize;
        font-family: 'Montserrat-Medium', Helvetica;
        font-size: 16px;
        font-weight: 500;
        padding: 0 2rem;
      }
      .enterprise-sections-subtitle {
        font-size: 16px;
        display: none;
      }
      iframe {
        margin: 6rem 0 2rem;
        width: 100%;
      }
    }
  }
  .guide-section {
    text-align: center;
    padding: 5rem 0;
    background: linear-gradient(
      180deg,
      rgb(244.37, 253.73, 255) 0%,
      rgba(244.37, 253.73, 255, 0.19) 100%
    );
    @media (max-width: 768px) {
      .not-hero {
        font-size: 32px;
        padding-bottom: 1rem;
      }
    }
    .section-2 {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      @media (max-width: 768px) {
        width: 90%;
        margin-top: 6rem;
      }
      @media (min-width: 1290px) {
        width: 80%;
      }
    }
  }
  .unlock-channel-section {
    padding: 3rem 1rem 5rem;
    margin: 0 auto;
    text-align: center;
    background-color: #f2fff3;
    .unlock-channel-intro {
      font-family: 'Montserrat-Black', Helvetica;
      font-size: 32px;
      font-weight: 500;
    }
    .connect-button-wrapper {
      margin-top: 2rem;
    }
    @media (max-width: 768px) {
      .unlock-channel-intro {
        font-family: 'Montserrat-Medium', Helvetica;
        font-size: 24px;
        font-weight: 500;
      }
    }
  }
  .section-button {
    margin-top: 60px;
  }
  .canvasIntro {
    text-align: center;
    background-color: #525c53;
    /* margin-top: 5rem; */
    padding: 5rem 0;
    .canvasIntroButtons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      max-width: 45rem;
      margin: 0 auto;
    }
    .mobile-intro {
      color: #ffffff;
      font-family: 'Montserrat-Black', Helvetica;
      font-size: 32px;
      font-weight: 900;
      @media (max-width: 768px) {
        font-family: 'Montserrat-Medium', Helvetica;
        font-size: 24px;
        font-weight: 500;
      }
    }
    @media (max-width: 768px) {
      padding: 3rem 0;
      .canvasIntroButtons {
        margin: 33px 0;
      }
    }
  }
`;
