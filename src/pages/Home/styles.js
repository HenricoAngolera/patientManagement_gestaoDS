import { styled } from 'styled-components';

export const Container = styled.div`  
  text-align: center;
  width: 35rem;
  margin: auto;

  .menuBar {
    /* display: flex; */

    .actions {
      display: flex;
    }
  }

  .table-container {
    overflow-x: auto;
  }
  
  > table {
    width: 100%;
  }
`;