import { styled } from "styled-components"

export const Container = styled.div`

  > .input-box {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    padding: 1rem 1.5rem;

    border: 1px solid ${({ theme }) => theme.COLORS.INPUT_BORDER};
    font-size: 1.4rem;
  
    input {
      border: none;
      background: none;
    }

    svg {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.BLUE};
    }
  }

  > input::placeholder {
    color: ${({ theme, $searchColor }) => $searchColor ? theme.COLORS.GRAY : theme.COLORS.PLACEHOLDER};
  }
`;