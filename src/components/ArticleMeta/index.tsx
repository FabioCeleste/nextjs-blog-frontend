import * as Styled from './styles';
import { Author } from '../../shared-typed/author';
import { Category } from '../../shared-typed/category';
import { formatdate } from '../../utils/formatDate';

export type ArticleMetaProps = {
  createdAt: string;
  author: Author;
  category: Category;
};

export const ArticleMeta = ({
  createdAt,
  author,
  category,
}: ArticleMetaProps) => {
  return (
    <Styled.Wrapper>
      <p>
        <span>Por </span>
        <a href={`/author/${author.data.attributes.slug}`}>
          {author.data.attributes.displayName}
        </a>
        <span className="separator"> | </span>

        <time dateTime={createdAt}>{formatdate(createdAt)}</time>
        <span className="separator"> | </span>

        <span className="category">
          <a href={`/cetegory/${category.data.attributes.slug}`}>
            {category.data.attributes.displayName}
          </a>
        </span>
      </p>
    </Styled.Wrapper>
  );
};
