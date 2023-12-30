import { styled } from "styled-components"

export const Container = styled.div`
  label {
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  select {
    padding: 1rem 1.5rem;

    border: 1px solid ${({ theme }) => theme.COLORS.INPUT_BORDER};
    background: none;
    font-size: 1.4rem;

    width: 100%;

  }

  select::placeholder {
    color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
  }
`