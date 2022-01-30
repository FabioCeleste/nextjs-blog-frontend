import * as Styled from './styles';

export type HtmlContentProps = {
  html: string;
};

export const HtmlComponent = ({ html }: HtmlContentProps) => {
  return <Styled.Container dangerouslySetInnerHTML={{ __html: html }} />;
};
