import styled from 'styled-components';

const StyledSwitch = styled.section`
  ${'' /* margin-top: ${({ theme }) => theme.FONT_SIZES.SMALL_A}; */}
  margin-bottom: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
  ${'' /* margin-left: ${({ theme }) => theme.FONT_SIZES.EXTRA_SMALL_C}; */}

  & .ant-switch-handle {
    width: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
    height: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
  }

  & .ant-switch-checked {
    border: 1px solid ${({ theme }) => theme.BACKGROUND_COLORS.PRIMARY};
    background: #d5e7f1;

    .ant-switch-handle::before {
      background: ${({ theme }) => theme.BACKGROUND_COLORS.PRIMARY};
    }
  }

  span {
    font-size: ${({ theme }) => theme.FONT_SIZES.EXTRA_SMALL_D};
    line-height: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
    margin-left: ${({ theme }) => theme.FONT_SIZES.SMALL_A};
  }
`;

export default StyledSwitch;
