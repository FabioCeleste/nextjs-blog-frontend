import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';
import { Title as HeadingStyles } from '../Heading/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 450px;
    border: 1px solid ${theme.colors.mediumGray};
    border-radius: 18px;
    transition: all 200ms ease-in-out;

    ${HeadingStyles} {
      margin: 0;
      padding-left: 15px;
    }
  `}

  a {
    text-decoration: none;
  }

  a:hover {
    color: ${theme.colors.secondaryColor};
  }

  :hover {
    box-shadow: 3px 3px ${theme.colors.darkerGray};
  }
`;

export const Cover = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    transition: opacity 300ms ease-in-out;
    padding: 15px;
  `}

  &:hover {
    opacity: 0.8;
  }
`;

export const Excerpt = styled.p`
  padding: 15px;
  padding-top: 0;
`;
