import styled from 'styled-components';

export const StyledBilling = styled.section`
  max-width: 800px;
  .flex {
    display: flex;
  }
  .space-between {
    justify-content: space-between;
  }
  .heading {
    font-weight: 800;
    font-size: 1.5rem;
  }
  .ml-3 {
    margin-left: 3.75rem;
  }
  .mt-2 {
    margin-top: 2.5rem;
  }
  .greyCard {
    background-color: #eeeeee;
    min-width: 180px;
    width: max-content;
    padding: 0.5rem;
    border-radius: 0.5rem;
    .greyCardTitle {
      font-size: 0.87rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    p {
      margin: 0;
    }
  }
  .upgradeBtn {
    section {
      button {
        border-radius: 30px;
        width: 105px;
        height: 40px;
        font-weight: 700;
        font-size: 1rem;
        padding: 0;
      }
    }
    .cancelBtn {
      border: none;
      font-weight: 700;
      margin-left: 1.5rem;
      font-size: 16px;
      background: linear-gradient(
        91.19deg,
        #f7901e 0.56%,
        #ebc554 28.7%,
        #509fa1 60.56%,
        #5b5fd1 98.56%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  }

  .paymentMethods {
    padding: 3rem 0;
    margin: 3rem 0;
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    .greyCardTitle {
      font-size: 0.87rem;
      font-weight: 600;
      margin-bottom: 0;
    }
  }

  .invoices {
    padding-bottom: 5rem;
    margin-top: 3rem;
    table {
      box-shadow: 0px 0px 0px 0.5px rgba(0, 0, 0, 0.25);
      border-radius: 0.5rem;
    }
    .ant-table-thead {
      tr th {
        background: #eeeeee;
        font-weight: 700;
        border-bottom: none;
        text-align: center;
        /* padding: 1rem 0.5rem; */
      }

      tr th:first-child {
        border-top-left-radius: 0.5rem;
      }

      tr th:last-child {
        border-top-right-radius: 0.5rem;
      }
      tr
        > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
        display: none;
      }
    }
    td {
      text-align: center;
      border-bottom: none;
    }
  }
`;
