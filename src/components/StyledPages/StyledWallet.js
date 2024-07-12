import styled from 'styled-components';

export const StyledWallet = styled.section`
  height: 100%;

  h2 {
    font-size: ${({ theme }) => theme.SPACING.SMALL_B};
    line-height: 1.813rem;
    font-weight: 800;
  }

  @media all and (max-width: 768px) {
    padding: 1rem;
    text-align: center;
    h2 {
      display: none;
    }
    .ant-tabs {
      display: none;
    }
  }
`;
