import styled from 'styled-components';

export const StyledMonetize = styled.section`
  text-align: center;
  width: 95vw;
  margin: 0 auto;
  position: relative;
  top: -2rem;
  p {
    margin-bottom: 0.5rem;
  }
  .textCenter {
    text-align: center;
  }
  .gradientText {
    background: linear-gradient(
      180deg,
      rgb(245, 132, 31) 0%,
      rgb(241.19, 200.95, 97.48) 40.11%,
      rgb(0, 179, 166) 68.75%,
      rgb(90.7, 95.45, 209.31) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1rem;
    font-weight: 700;
  }

  .createCanvasCardContainer {
    display: flex;
    justify-content: space-between;
    max-width: 85rem;
    margin: 0 auto;
    margin-top: 2.13rem;
    .uploadCard {
      width: 9.5rem;
      height: 9.875rem;
      border-radius: 1rem;
      background: #f6f6f6;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p {
        margin-top: 0.75rem;
      }
    }
  }
  /* .comingSoon {
    font-size: 2rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 50%;
  } */
  .textCanvasBtn {
    border-radius: 1rem;
    width: 11.375rem;
    height: 2.75rem;
    border: 2px solid #0e56a2;
    background: #fff;
    color: #0e56a2;
    font-weight: 700;
    margin-top: 2.3rem;
    cursor: pointer;
  }
`;
