import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    font-size: 16px;
    color: ${theme.colors.darkerGray};
    font-style: italic;

    a {
      color: ${theme.colors.secondaryColor};
      text-decoration: none;
      transition: all 300ms ease-in-out;
    }

    &:hover {
      filter: brightness(50%);
    }
  `}
`;
