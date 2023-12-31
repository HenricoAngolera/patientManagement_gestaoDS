import { styled } from "styled-components"

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  label {
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  > .input-box {
    display: flex;
    align-items: center;
    ${({ $textPosition }) => $textPosition ? 'justify-content: center;' : ''}
    gap: 0.5rem;

    padding: 1rem 1.5rem;

    border: 1px solid ${({ theme }) => theme.COLORS.INPUT_BORDER};
    font-size: 1.4rem;

    width: 100%;
  
    input {
      border: none;
      background: none;
      width: 100%;
    }

    svg {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.BLUE};
    }
  }

  > input::placeholder {
    color: ${({ theme, $searchcolor }) => $searchcolor ? theme.COLORS.GRAY : theme.COLORS.PLACEHOLDER};
  }
`;