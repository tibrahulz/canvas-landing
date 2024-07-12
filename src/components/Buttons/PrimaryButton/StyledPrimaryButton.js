/* eslint-disable sonarjs/no-nested-template-literals */
import styled from 'styled-components';

const StyledPrimaryButton = styled.section`
  display: inline-block;

  & .ant-btn-primary {
    background: ${({ theme }) => theme.GRADIENT.PRIMARY_GRADIENT} !important;
    border-color: transparent !important;
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.SMALL_C};
    border: none !important;
    font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_SMALL_F};
    ${props =>
      props.customStyle == 'small' &&
      `
      font-size: 1.125rem;
      font-size: 1rem;
    `}
    padding: 1rem 1.5rem !important;
    display: flex;
    align-items: center;
  }
  & .ant-btn-primary[disabled] {
    background: ${({ theme }) =>
      theme.BACKGROUND_COLORS.SECONDARY_1} !important;
    border-color: ${({ theme }) =>
      theme.BACKGROUND_COLORS.SECONDARY_2} !important;
  }

  & .anticon-plus {
    font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_SMALL_D} !important;
    font-weight: 500;
  }
`;
export default StyledPrimaryButton;
