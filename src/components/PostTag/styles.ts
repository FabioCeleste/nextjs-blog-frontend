import styled, { css } from 'styled-components';

export const Wrapper = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
    color: ${theme.colors.darkerGray};

    span {
      margin: 0 0.5rem;
    }

    span::after {
      content: ',';
    }

    span:last-child::after {
      content: '';
    }

    a {
      color: ${theme.colors.darkerGray};
      transition: all 200ms ease-in-out;
    }

    a:hover {
      color: ${theme.colors.darkText};
    }
  `}
`;
