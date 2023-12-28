import { styled } from "styled-components"

export const Container = styled.div`
  font-weight: normal;
  font-size: 1.4rem;
  z-index: 2;
  position: absolute;
  width: 10rem;
  left: 3rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND2};

  display: flex;
  flex-direction: column;

  > a {
    padding: 1rem 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  > a:hover {
    color: ${({ theme }) => theme.COLORS.BLUE};
    background: ${({ theme }) => theme.COLORS.OPTION_SELECTED};
  }
`;