import styled from 'styled-components';
export const FeedPage = styled.section`
  display: flex;
  flex-direction: column;
  .flex {
    display: flex;
    align-items: center;
  }
  .topHeading {
    font-weight: 800;
    border-bottom: 0.063rem solid #c8c8c8;
    padding-bottom: ${({ theme }) => theme.SPACING.EXTRA_SMALL_D};
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_B};
    padding: 1rem;
    padding-bottom: 0;
  }

  .tesmonialFlex {
    display: flex;
    flex-wrap: wrap;
    height: 75vh;
    overflow-y: scroll;
    padding-top: 1rem;
    section {
      margin-bottom: 2.5rem;
    }
  }

  @media all and (max-width: 768px) {
    .tesmonialFlex {
      justify-content: center;
    }
    .ant-tabs {
      display: none;
    }
  }
`;
