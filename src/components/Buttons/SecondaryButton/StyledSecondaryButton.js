import styled from 'styled-components';

const StyledSecondaryButton = styled.section`
  display: inline-block;

  & .ant-btn-round {
    border-color: ${({ theme }) => theme.BACKGROUND_COLORS.PRIMARY} !important;
    color: ${({ theme }) => theme.FONT_COLORS.PRIMARY};
    border-radius: ${({ theme }) => theme.BORDER_RADIUS.SMALL_C};
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A} !important;
    padding: 1rem 1.5rem !important;
    display: flex;
    align-items: center;

    & svg {
      margin-right: 0.25rem;
    }
  }
  & .ant-btn[disabled] {
    background: ${({ theme }) =>
      theme.BACKGROUND_COLORS.SECONDARY_1} !important;
    border-color: ${({ theme }) =>
      theme.BACKGROUND_COLORS.SECONDARY_2} !important;
    color: ${({ theme }) => theme.FONT_COLORS.SECONDARY_2} !important;
  }

  & .anticon-plus {
    font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_SMALL_D} !important;
    font-weight: 500;
  }
`;
export default StyledSecondaryButton;
