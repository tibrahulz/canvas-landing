import styled from 'styled-components';
export const StyledRoute = styled.section`
  & .ant-tabs-ink-bar {
    background: ${({ theme }) => theme.GRADIENT.PRIMARY_GRADIENT} !important;
    height: 3px !important;
  }
  .ant-tabs-tab.ant-tabs-tab .ant-tabs-tab-btn {
    color: ${({ theme }) => theme.FONT_COLORS.BLACK} !important;
    font-weight: 500;
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_B} !important;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: transparent !important;
    background: linear-gradient(
      120deg,
      #f7901e 10%,
      #ebc554 24%,
      #6ec377 37%,
      #509fa1 55.94%,
      #368695 70.62%,
      #31348e 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_B} !important;
  }

  @media all and (max-width: 768px) {
    margin: 0 1rem;
  }

  .ant-tabs-nav-operations {
    display: none !important;
  }
`;
