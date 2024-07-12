import styled from 'styled-components';

const StyledCreateCanvas = styled.section`
  .headerTitle {
    div {
      span {
        font-weight: 700;
        font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_F};
      }
    }
  }
  .container {
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .cards {
      display: flex;
    }
  }
  .uploadContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .helpGuideLabel {
      display: flex;
      margin-top: ${({ theme }) => theme.SPACING.EXTRA_SMALL_C};
      cursor: pointer;
      p {
        font-weight: 500;
        font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_SMALL_E};
        margin: 0;
      }
    }
  }
`;

export default StyledCreateCanvas;
