import styled from 'styled-components';

const StyledToolkit = styled.section`
  .flex,
  .mediaList {
    display: flex;
    flex-wrap: wrap;
  }

  .head {
    display: flex;
    justify-content: space-between;
    border-bottom: 0.063rem solid #e5e5e5;
    align-items: center;
  }

  .mediaList {
    overflow: scroll;
    overflow-x: hidden;
    height: 77vh;
    margin-top: ${({ theme }) => theme.SPACING.SMALL_A};
  }
  .parent {
    .ant-tabs-top > .ant-tabs-nav {
      margin: 0;
    }
  }
  .parent > h1 {
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_B};
    font-weight: 800;
    margin-top: 0.3rem;
    max-height: 2rem;
    border-right: 1px solid lightgrey;
    padding-right: 2rem;
  }

  .header {
    height: 2.5rem;
  }

  .header > section {
    margin-top: -1rem;
  }

  #uploadBtn {
    display: none;
  }

  .error-card {
    position: fixed;
    left: 5%;
    bottom: 5%;
  }

  .uploadBar {
    display: flex;
    justify-content: space-between;
  }

  .noToolkitButton {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
    color: ${({ theme }) => theme.FONT_COLORS.WHITE};
  }

  .noToolkitLayer {
    margin: ${({ theme }) => theme.SPACING.SMALL_C} auto;
    height: 2.25rem;
    width: 9.25rem;
    background: ${({ theme }) => theme.BACKGROUND_COLORS.PRIMARY};
    border: 0.063rem solid ${({ theme }) => theme.BACKGROUND_COLORS.PRIMARY};
    text-align: center;
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.SMALL_A};
    padding: 0.375rem ${({ theme }) => theme.SPACING.EXTRA_SMALL_E};
    cursor: pointer;
  }

  .noToolkitExplore {
    color: ${({ theme }) => theme.FONT_COLORS.PRIMARY};
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
    font-weight: 600;
  }

  .noToolkitContent {
    line-height: 0;
    padding-bottom: ${({ theme }) => theme.SPACING.EXTRA_SMALL_A};
    p {
      padding-top: ${({ theme }) => theme.SPACING.EXTRA_SMALL_C};
      font-size: 1.125rem;
    }
  }
  .noToolkit {
    position: absolute;
    width: max-content;
    z-index: 0;
    left: 57%;
    top: 28rem;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

  @media all and (max-width: 768px) {
    .head {
      position: relative;
    }
    .uploadButtonHeader {
      position: absolute !important;
      top: 0.5rem !important;
      right: 0.5rem;
    }
    .parent > h1 {
      padding-left: 0.5rem;
    }
    .parent {
      flex-direction: column;
    }
  }
`;

export default StyledToolkit;
