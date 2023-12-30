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

  .header-modal {
    display: flex;
    justify-content: space-between;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER_MENU};
  }

  .header-modal .nav {
    display: flex;
    gap: 2rem;


    font-size: 1.6rem;
  }

  .header-modal .nav > :first-child {
    z-index: 1002;
    color: ${({ theme }) => theme.COLORS.PURPLE};

    padding-bottom: 1.8rem;
    
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.PURPLE};
  }

  .header-modal svg {
    cursor: pointer;
  }

  .content-modal {
    flex: 1;
    overflow: auto;

    margin-bottom: 5rem;
  }

  .content-modal img {
    margin-top: 2.7rem;
    margin-bottom: 3.5rem;
  }

  .content-modal .textarea-box {
    display: flex;
    flex-direction: column;
  }

  .content-modal .textarea-box textarea {
    display: flex;
    flex-direction: column;

    padding: 1rem 1.5rem;

    border: 1px solid ${({ theme }) => theme.COLORS.INPUT_BORDER};
    font-size: 1.4rem;

    width: 100%;
    height: 5.3rem;

    resize: none;
  }

  .content-modal .textarea-box label {
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  .button-modal {
    width: 18.9rem;
    margin-left: auto;

    display: flex;
    justify-content: flex-end;
  }
`