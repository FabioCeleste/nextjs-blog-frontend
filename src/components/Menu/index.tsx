import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import React, { useState } from 'react';
import { LogoLink } from '../LogoLink';
import { MenuLink } from '../MenuLink';

import * as Styled from './styles';

type MenuLinkProps = {
  id: string;
  link: string;
  text: string;
  newTab: boolean;
};

type LogoProps = {
  blogName: string;
  attributes: {
    url: string;
  };
};

export type MenuProps = {
  menuLinks: MenuLinkProps[];
  attributes: {
    blogName: string;
    logo: {
      data: LogoProps[];
    };
  };
};

export const Menu = ({ attributes, menuLinks }: MenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleOpenCloseMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuVisible((v) => !v);
  };

  return (
    <>
      <Styled.OpenClose
        href="#"
        aria-label="Open or close menu"
        title="Open or close menu"
        menuVisible={menuVisible}
        onClick={handleOpenCloseMenu}
      >
        {menuVisible && <CloseIcon aria-label="Close Menu" />}
        {!menuVisible && <MenuIcon aria-label="Open Menu" />}
      </Styled.OpenClose>

      <Styled.Wrapper menuVisible={menuVisible} aria-hidden={!menuVisible}>
        <Styled.Nav>
          <Styled.Logo>
            <LogoLink
              link="/"
              text={attributes.blogName}
              srcImg={attributes.logo.data[0].attributes.url}
            />

            {menuLinks.map((link) => (
              <MenuLink key={link.id} link={link.link} newTab={link.newTab}>
                {link.text}
              </MenuLink>
            ))}
          </Styled.Logo>
        </Styled.Nav>
      </Styled.Wrapper>
    </>
  );
};
