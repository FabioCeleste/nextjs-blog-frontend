import React, { useEffect, useState } from 'react';
import { Heading } from '../Heading';
import { LogoLink } from '../LogoLink';

import * as Styled from './styles';

export type HeaderProps = {
  blogName: string;
  blogDescription: string;
  logo: string;
  showText?: boolean;
};

// TODO - when display is small showText should always be false
export const Header = ({
  blogDescription,
  blogName,
  logo,
  showText = true,
}: HeaderProps) => {
  return (
    <Styled.Wrapper>
      <LogoLink
        link="/"
        srcImg={logo}
        text={`${blogName} - ${blogDescription}`}
      />
      {showText && (
        <Styled.Content>
          <Heading size="small" as="h1" colorDark={true}>
            {blogName}
          </Heading>
          <p>{blogDescription}</p>
        </Styled.Content>
      )}
    </Styled.Wrapper>
  );
};
