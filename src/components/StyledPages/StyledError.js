import styled from 'styled-components';

export const StyledError = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: ${({ theme }) => theme.SPACING.LARGE_B};
  background: ${({ theme }) => theme.BACKGROUND_COLORS.WHITE};
  text-align: center;

  .error-image {
    margin: 2rem;
  }
  h5 {
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_C};
    font-weight: 800;
  }

  p {
    font-weight: 400;
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
  }

  .navigate-page {
    width: 8.2rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .navigate-page button {
    border: none;
    background-color: transparent;
    text-decoration: underline;
    font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_SMALL_A};
    padding: 0;
    cursor: pointer;
  }
  .navigate-page button:disabled {
    opacity: 0.5;
  }
`;
