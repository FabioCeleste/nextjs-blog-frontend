import { settings } from 'cluster';
import React from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import * as Styled from './styles';

type LogoProps = {
  attributes: {
    name: string;
    url: string;
  };
};

type MenuLinkProps = {
  id: string;
  link: string;
  text: string;
  newTab: boolean;
};

export type BaseTemplateProps = {
  children?: React.ReactNode;
  setting: {
    data: {
      id: string;
      attributes: {
        blogName: string;
        blogDescription: string;
        text: string;
        logo: {
          data: LogoProps[];
        };
        menuLink: MenuLinkProps[];
      };
    };
  };
};

export const BaseTemplate = ({ setting, children }: BaseTemplateProps) => {
  return (
    <Styled.Wrapper>
      <Menu
        menuLinks={setting.data.attributes.menuLink}
        attributes={setting.data.attributes}
      />
      <Styled.HeaderContainer>
        <Header
          blogName={setting.data.attributes.blogName}
          blogDescription={setting.data.attributes.blogDescription}
          logo={setting.data.attributes.logo.data[0].attributes.url}
        />
      </Styled.HeaderContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>

      <Styled.FooterContainer>
        <Footer footerHtml={setting.data.attributes.text} />
      </Styled.FooterContainer>
    </Styled.Wrapper>
  );
};
