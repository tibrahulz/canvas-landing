import styled from 'styled-components';

export const StyledNotificationPage = styled.section`
  height: 100%;
  position: relative;

  h2 {
    font-size: ${({ theme }) => theme.SPACING.SMALL_C};
    line-height: 1.813rem;
    font-weight: 800;
  }

  .card-container {
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_C};
    margin-top: ${({ theme }) => theme.SPACING.LARGE_A};
  }

  .notification-image {
    margin: 0;
    position: absolute;
    transform: translate(100%, 80%);

    img {
      width: 20rem;
    }
  }
`;
