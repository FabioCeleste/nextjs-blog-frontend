import * as Styled from './styles';
import { HtmlComponent } from '../HtmlContent';

export type FooterProps = {
  footerHtml: string;
};

export const Footer = ({ footerHtml }: FooterProps) => {
  return (
    <Styled.Container>
      <HtmlComponent html={footerHtml} />
    </Styled.Container>
  );
};
