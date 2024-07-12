import styled from 'styled-components';
export const EngagementPage = styled.section`
  position: relative;
  margin-right: -4rem !important;

  .flex {
    display: flex;
    align-items: center;
  }
  .engegementCards {
    flex-wrap: wrap;
    display: flex;
    position: absolute;
    z-index: 0;
    top: 7.5rem;
    overflow: auto;
    height: calc(100vh - 12.5rem);
    width: 100%;
    margin-top: 1rem;
  }
  .fixTop {
    width: calc(100vw - 20.5rem);
    position: fixed;
    margin-top: 4rem;
    margin-bottom: 2rem;
  }
  .topHeading {
    font-weight: 700;
    padding-right: ${({ theme }) => theme.SPACING.SMALL_D};
  }
  .engagementButton {
    width: 10.15rem;
    color: ${({ theme }) => theme.FONT_COLORS.PRIMARY};
    border: 0.063rem solid ${({ theme }) => theme.BACKGROUND_COLORS.PRIMARY};
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.SMALL_A};
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
    padding: 0.375rem ${({ theme }) => theme.SPACING.EXTRA_SMALL_E};
    text-align: center;
  }
  .engagementButtonBorder {
    border-right: 0.063rem solid #c8c8c8;
    padding-right: ${({ theme }) => theme.SPACING.SMALL_D};
    cursor: pointer;
  }
  .noEngagementButton {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
    color: ${({ theme }) => theme.FONT_COLORS.WHITE};
  }
  .noEngagementLayer {
    margin: ${({ theme }) => theme.SPACING.SMALL_C} auto;
    height: 2.25rem;
    width: 10.15rem;
    background: #8a7e82;
    border: 0.063rem solid ${({ theme }) => theme.BACKGROUND_COLORS.PRIMARY};
    text-align: center;
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.SMALL_A};
    padding: 0.375rem ${({ theme }) => theme.SPACING.EXTRA_SMALL_E};
    cursor: pointer;
  }
  .noEngagementExplore {
    color: ${({ theme }) => theme.FONT_COLORS.PRIMARY};
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
    font-weight: 600;
  }
  .noEngagementContent {
    margin-top: 2rem;
    p {
      margin: 0;
      font-size: 1.125rem;
    }
  }
  .noEngagement {
    position: absolute;
    width: 100%;
    left: 50%;
    top: 25rem;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .create-button {
    display: none;
  }

  @media all and (max-width: 768px) {
    margin-right: 0rem !important;
    .ant-tabs-mobile {
      display: none;
    }

    .engagementButtonBorder {
      display: none;
    }

    .search-box {
      display: none;
    }

    .create-button {
      display: inline-block;
      position: absolute;
      top: ${({ theme }) => theme.FONT_SIZES.SMALL_F};
      right: ${({ theme }) => theme.SPACING.SMALL_A};
    }

    .mobile-header-container {
      position: relative;
      width: 90%;
      margin: 0 auto;
    }

    .fixTop {
      width: 0;
      position: relative;
      margin-top: ${({ theme }) => theme.SPACING.SMALL_A};
      margin-bottom: 0;
      section {
        justify-content: space-between;
      }
    }

    .engegementCards {
      top: ${({ theme }) => theme.SPACING.LARGE_B};
      width: 85%;
      margin: 0 auto;
    }
  }
`;
