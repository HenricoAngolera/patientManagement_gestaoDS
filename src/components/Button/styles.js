import { styled } from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  padding-block: 0.55rem;
  border: ${({ theme, $btnBorder }) => $btnBorder ? `1px ${theme.COLORS.BLUE} solid` : "none"};
  border-radius: .4rem;

  font-size: 1.4rem;
  color: ${({ $btnColor }) => $btnColor};
  background-color: ${({ $btnBgColor }) => $btnBgColor};
`