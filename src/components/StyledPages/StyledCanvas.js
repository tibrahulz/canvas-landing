import styled from 'styled-components';

const StyledCanvas = styled.section`
  .canvasBody {
    position: relative;
    width: 70%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-flow: column;
    align-items: start;
    margin-top: ${props => (props.isLoggedIn ? '2rem' : '3rem')};
  }
  .center {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .canvas_title {
    font-style: normal;
    font-weight: 700;
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_F};
  }
  .flex {
    display: flex;
    align-items: center;
  }
  .userName {
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
    font-weight: 400;
  }

  .userImage {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    margin-right: ${({ theme }) => theme.SPACING.EXTRA_SMALL_J};
  }
  p {
    margin: 0 !important;
  }
  .padd-right {
    padding-right: ${({ theme }) => theme.SPACING.EXTRA_SMALL_A};
  }
  .userInfo {
    margin-top: ${({ theme }) => theme.SPACING.EXTRA_SMALL_A};
  }
  .lockedPost {
    width: 50%;
    display: flex;
    justify-content: center;
    margin-top: ${({ theme }) => theme.SPACING.MEDIUM_A};
  }
  .backButton {
    display: flex;
    background: none;
    border: none;
    cursor: pointer;
    font-size: ${({ theme }) => theme.FONT_SIZES.LARGE_A};
  }
  .canvasInfo {
    display: flex;
    margin-left: -4rem;
  }
  .canvasInfo_heading {
    margin-left: 1rem;
  }
  .canvasInfo_heading2 {
    margin-left: 4rem;
  }

  @media all and (max-width: 768px) {
    .canvasBody {
      /* width: 90%; */
    }
  }
`;

export default StyledCanvas;
