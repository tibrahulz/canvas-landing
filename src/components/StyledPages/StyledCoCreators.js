import styled from 'styled-components';

export const StyledCoCreators = styled.section`
  .co-creators-section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    section {
      margin: ${({ theme }) => theme.SPACING.SMALL_D} 0
        ${({ theme }) => theme.SPACING.SMALL_D}
        ${({ theme }) => theme.SPACING.SMALL_D};
      height: auto;

      .userName {
        font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
        color: ${({ theme }) => theme.FONT_COLORS.BLACK};
      }

      .email {
        font-size: 13px;
        color: ${({ theme }) => theme.FONT_COLORS.BLACK_2};
      }

      .canvas {
        color: ${({ theme }) => theme.FONT_COLORS.BLUE_6};
      }
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.SPACING.SMALL_C};
    line-height: 1.813rem;
    font-weight: 800;
  }
`;

export const StyledSelectCoCreators = styled.section`
  margin-top: 1.8rem;
  text-align: center;
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    border-color: #ccc;
    border-radius: 0.5rem;
  }
`;
