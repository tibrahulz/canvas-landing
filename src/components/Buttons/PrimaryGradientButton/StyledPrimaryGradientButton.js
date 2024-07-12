import styled from 'styled-components';

const StyledPrimaryGradientButton = styled.section`
  display: inline-block;

  & .ant-btn-primary {
    background: ${({ theme }) => theme.GRADIENT.PRIMARY_GRADIENT} !important;
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.MEDIUM_A};
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_C};
    padding: 1.5rem 2rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    border: none;
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
export default StyledPrimaryGradientButton;
