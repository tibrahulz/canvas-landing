import styled from 'styled-components';

const StyledSecondaryButton = styled.section`
  display: inline-block;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.LARGE_A};
  background: ${({ theme }) => theme.GRADIENT.PRIMARY_GRADIENT};
  padding: 1px;

  & .ant-btn-round {
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_B} !important;
    /* padding: 1.44rem 1.9rem; */
    display: flex;
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.LARGE_A};
    align-items: center;
    border: none;
    & .btnText {
      background: ${({ theme }) => theme.GRADIENT.PRIMARY_GRADIENT};
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
    }
    & svg {
      margin-right: 0.25rem;
    }
  }
  & .ant-btn[disabled] {
    opacity: 0.5;
    color: ${({ theme }) => theme.FONT_COLORS.WHITE};
  }

  & .anticon-plus {
    font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_SMALL_D} !important;
    font-weight: 500;
  }
`;
export default StyledSecondaryButton;
