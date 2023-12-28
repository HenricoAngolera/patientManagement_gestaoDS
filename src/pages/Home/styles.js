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
  }

  table tr {
    display: grid;
    grid-template-columns: repeat(6, 14.8rem);
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
  }

  td a:hover {
    color: ${({ theme }) => theme.COLORS.BLUE};
  }

  .blue {
    color: ${({ theme }) => theme.COLORS.BLUE};
  }

`;