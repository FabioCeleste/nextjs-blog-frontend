import { Author } from '../../shared-typed/author';
import { Category } from '../../shared-typed/category';
import { ArticleHeader } from '../ArticleHeader';
import { Header } from '../Header';
import { HtmlComponent } from '../HtmlContent';
import { PostContainer } from '../PostContainer';
import * as Styled from './styles';

export type BlogPostProps = {
  id: string;
  blogName: string;
  blogDescription: string;
  logo: string;
  showText?: boolean;

  title: string;
  excerpt: string;

  createdAt: string;
  author: Author;
  category: Category;

  content: string;

  cover: {
    data: {
      attributes: {
        alternativeText: string;
        url: string;
      };
    };
  };
};

export const BlogPost = (props: BlogPostProps) => {
  return (
    <Styled.Wrapper>
      <PostContainer size="max">
        <Header {...props} />
        <ArticleHeader {...props} />
      </PostContainer>

      <PostContainer size="content">
        <HtmlComponent html={props.content} />
      </PostContainer>
    </Styled.Wrapper>
  );
};
