import { styled } from 'styled-components';

export const Container = styled.div`  
  text-align: center;
  width: 35rem;
  margin: auto;

  main {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND2};
    padding-top: 2rem;
  }

  .menuBar {
    margin-bottom: 2rem;

    h2 {
      font-weight: normal;
      margin-block: 1rem;
    }

    .actions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
  }

  .table-container {
    overflow-x: auto;
  }
  
  table {
    margin-inline: 1rem;
    width: 100%;
    text-align: left;    
    font-size: 1.4rem;

    margin-bottom: 5rem;
  }

  table tr {
    display: grid;
    grid-template-columns: repeat(6, 15rem);
    gap: 1.6rem;
  }

  table tr:nth-child(even){
    background: ${({ theme }) => theme.COLORS.BACKGROUND2};
  }

  table tr:nth-child(odd){
    background: ${({ theme }) => theme.COLORS.BACKGROUND3};
  }

  tbody tr >:last-child{
    position: relative;
    
    font-weight: bold;
    font-size: 1.5rem;

    display: flex;
    gap: 1.5rem;
  }

  th, td {
    padding-block: .8rem;

    border-block: 0.5px solid ${({ theme }) => theme.COLORS.INPUT_BORDER};
  }

  td a:hover {
    color: ${({ theme }) => theme.COLORS.BLUE};
  }

  .blue {
    color: ${({ theme }) => theme.COLORS.BLUE};
  }

  /* =========== DESKTOP ================== */

  @media (min-width: 1024px) {
    width: 100rem;

    .menuBar {
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding-inline: 6rem;

      h2 {
        font-size: 1.4rem;
      }

      .actions {
        
      }

      .inputW {
        width: 15rem;
      }

      .buttonW {
        width: 14rem;
      }
    }

    .table-container {
      overflow-y: auto;
      overflow-x: hidden;
      height: 37rem;
    }

    table {
      margin: auto;
      padding: 1.7rem 1.6rem;
      width: 98.2rem;
      font-size: 1.4rem;
    }

    th, td {
      padding-left: 1.6rem;
      padding-top: 1.7rem;
    }

    th a svg {
      font-size: 1.2rem;
    }
  }

`;