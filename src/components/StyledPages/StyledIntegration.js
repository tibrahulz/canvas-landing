import styled from 'styled-components';

export const StyledIntegration = styled.section`
  .integration-available-section,
  .integration-coming-section {
    display: flex;

    section {
      margin-left: 0;
      margin-top: ${({ theme }) => theme.SPACING.SMALL_A};
    }
  }

  .top-heading {
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_B};
    font-weight: 800;
    font-family: 'Lato', sans-serif;
    margin-bottom: ${({ theme }) => theme.SPACING.MEDIUM_A};
  }

  .sub-heading {
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_E};
    font-weight: 600;
    font-family: 'Lato', sans-serif;
  }

  @media all and (max-width: 768px) {
    .top-heading {
      display: none;
    }
    .sub-heading {
      padding-top: ${({ theme }) => theme.SPACING.SMALL_A};
      text-align: center;
    }
    .integration-available-section,
    .integration-coming-section {
      flex-direction: column;

      section {
        margin: 0.75rem auto;
      }
    }

    .ant-tabs {
      display: none;
    }
  }
`;
