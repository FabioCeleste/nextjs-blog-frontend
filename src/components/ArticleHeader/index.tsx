import * as Styled from './styles';

import { Author } from '../../shared-typed/author';
import { Category } from '../../shared-typed/category';

import { Header } from '../Header';
import { ArticleMeta } from '../ArticleMeta';

export type ArticleHeaderProps = {
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

  cover: {
    data: {
      attributes: {
        alternativeText: string;
        url: string;
      };
    };
  };
};

export const ArticleHeader = ({
  title,
  excerpt,
  cover,
  createdAt,
  author,
  category,
}: ArticleHeaderProps) => {
  return (
    <Styled.Wrapper>
      <div>
        <h1>{title}</h1>
        <h2>{excerpt}</h2>
        <div className="post-cover">
          <img src={cover.data.attributes.url} alt={title} />
          <ArticleMeta
            createdAt={createdAt}
            author={author}
            category={category}
          />
        </div>
      </div>

      <div className="separator-header" />
    </Styled.Wrapper>
  );
};
