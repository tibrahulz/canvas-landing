import styled from 'styled-components';

export const StyledPurchasesPage = styled.section`
  height: 100%;

  h2 {
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_B};
    padding-bottom: ${({ theme }) => theme.SPACING.EXTRA_SMALL_C};
    border-bottom: 0.094rem solid
      ${({ theme }) => theme.BACKGROUND_COLORS.LIGHT_GREY};
    line-height: 1.813rem;
    font-weight: 800;
  }

  @media all and (max-width: 768px) {
    .ant-tabs {
      display: none;
    }
  }
`;
