import styled, { css, DefaultTheme } from 'styled-components';

import { Title as HeadingStyles } from '../Heading/styles';

type MenuBehaviorProps = {
  menuVisible: boolean;
  theme: DefaultTheme;
};

const wrapperChanger = (
  menuVisible: MenuBehaviorProps['menuVisible'],
  theme: DefaultTheme,
) => css`
  left: ${menuVisible ? '0' : '-31rem'};
  overflow-y: ${menuVisible ? 'auto' : 'hidden'};

  @media ${theme.media.lteMedium} {
    left: ${menuVisible ? '0' : '-32rem'};
  }
`;

export const Wrapper = styled.div<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    background: ${theme.colors.primaryColor};
    padding: ${theme.spacings.large};
    display: flex;
    position: fixed;
    z-index: 1;
    width: 100%;
    max-width: 32rem;
    height: 100vh;
    top: 0;
    left: 0;
    transition: all 300ms ease-in-out;

    ${wrapperChanger(menuVisible, theme)}
  `}
`;

export const Nav = styled.nav`
  ${({ theme }) => css`
    margin: auto;
    width: 100%;
  `}
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    ${HeadingStyles} {
      display: flex;
      justify-content: center;
      margin: 0;
      margin-bottom: 15px;
    }

    img {
      border: 0.5rem solid ${theme.colors.secondaryColor};
    }
  `}
`;

const buttonChanger = (
  menuVisible: MenuBehaviorProps['menuVisible'],
  theme: DefaultTheme,
) => css`
  left: ${menuVisible ? '26rem' : '1rem'};
  color: ${menuVisible ? theme.colors.secondaryColor : theme.colors.white};
  @media ${theme.media.lteMedium} {
    left: ${menuVisible ? '26rem' : '-0.5rem'};
  }
`;

export const OpenClose = styled.a<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    position: fixed;
    top: ${theme.spacings.medium};
    color: ${theme.colors.white};
    background: ${theme.colors.primaryColor};
    z-index: 2;
    width: 3rem;
    height: 3rem;
    left: 26rem;
    ${buttonChanger(menuVisible, theme)}
    transition: all 300ms ease-in-out;
  `}
`;
