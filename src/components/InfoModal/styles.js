import { styled } from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 1000;

  > div {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 3.2rem 2rem;
    width: 100vw;
    height: 100dvh;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND2};
    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
  }

  .content-modal {
    flex: 1;
    overflow: auto;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }
`