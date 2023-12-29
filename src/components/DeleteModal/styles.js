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

    width: 90%;
    height: max-content;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND2};
    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
  }

  .header-modal {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1.6rem;
    
    font-size: 2.4rem;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.PLACEHOLDER};

    h3 {
      color: ${({ theme }) => theme.COLORS.PURPLE_ALERT};
    }

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_400};
      cursor: pointer;
    }
  }

  .content-modal {
    flex: 1;

    margin-top: 2.4rem;
    margin-bottom: 3.4rem;

    text-align: center;

    p {
      color: ${({ theme }) => theme.COLORS.GRAY};
      
      margin-top: 3.2rem;
      margin-bottom: 2.6rem;
    }
  }

  .buttons-modal {
    display: flex;
    gap: 1.6rem;

    padding: 1.6rem;

    border-top: 1px solid ${({ theme }) => theme.COLORS.PLACEHOLDER};

    &:first-child {
      margin-left: 5rem;
    }
  }
`;