import styled from 'styled-components';

const StyledCanvases = styled.section`
  .flex,
  .canvasesList {
    display: flex;
    flex-wrap: wrap;
  }
  .mt-40 {
    margin-top: ${({ theme }) => theme.SPACING.LARGE_B};
  }
  .flex {
    margin-top: 0.5rem;
  }
  .canvasesList {
    overflow-x: hidden;
    height: 77vh;
    margin-top: 1rem;
    overflow-y: visible;
  }
  .canvasesList > section {
    margin: 1.5rem;
  }
  .vertical_line {
    margin: 0 1rem;
    margin-top: -0.2rem;
    height: 2.1rem;
    border-left: 1px solid lightgrey;
  }
  .header {
    width: 100%;
  }
  .header > section {
    margin-left: 1rem;
    margin-top: -0.2rem;
    height: 2.5rem;
    // border-left: 1px solid lightgrey;
  }
  .noCanvasButton {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
    color: ${({ theme }) => theme.FONT_COLORS.WHITE};
  }
  .noCanvasLayer {
    margin: ${({ theme }) => theme.SPACING.SMALL_C} auto;
    height: 2.25rem;
    width: 9.25rem;
    background: #8a7e82;
    border: 0.063rem solid ${({ theme }) => theme.BACKGROUND_COLORS.PRIMARY};
    text-align: center;
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.SMALL_A};
    padding: 0.375rem ${({ theme }) => theme.SPACING.EXTRA_SMALL_E};
  }
  .noCanvasExplore {
    color: ${({ theme }) => theme.FONT_COLORS.PRIMARY};
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
    font-weight: 600;
  }
  .noCanvasContent {
    line-height: 0;
    padding-bottom: ${({ theme }) => theme.SPACING.EXTRA_SMALL_A};
    p {
      padding-top: ${({ theme }) => theme.SPACING.EXTRA_SMALL_C};
      font-size: 1.125rem;
    }
  }
  .noCanvas {
    position: absolute;
    width: 100%;
    left: 57%;
    top: 28rem;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

  @media all and (max-width: 768px) {
    .tabContainer,
    .vertical_line,
    .secondaryBtn {
      display: none;
    }
    .header .children-container {
      height: 2.125rem;
    }

    .header > section {
      justify-content: center;
    }

    .canvasesList {
      height: 88vh;
    }
  }
`;

export default StyledCanvases;
