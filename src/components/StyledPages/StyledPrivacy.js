import styled from 'styled-components';

export const StyledPrivacy = styled.section`
  padding: 70px 10vw 120px;
  li {
    list-style-type: none;
  }

  tr,
  td,
  table,
  th {
    border: 1px solid ${({ theme }) => theme.FONT_COLORS.TERTIARY_0};
  }

  span {
    color: ${({ theme }) => theme.FONT_COLORS.TERTIARY_0};
    text-decoration: underline;
  }
  a {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-top: 0rem;
    padding: 0 1.5rem;
    font-size: ${({ theme }) => theme.FONT_SIZES.SMALL_A};

    ul {
      padding-left: ${({ theme }) => theme.SPACING.SMALL_A};
    }

    p {
      margin-left: 0.6rem;
    }
  }
`;
