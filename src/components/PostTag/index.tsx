import Link from 'next/link';
import { string } from 'prop-types';
import * as Styled from './styles';

type TagProps = {
  id: string;
  attributes: {
    displayName: string;
    slug: string;
  };
};

export type PostTagProps = {
  tags: {
    data: TagProps[];
  };
};

export const PostTag = ({ tags }: PostTagProps) => {
  return (
    <Styled.Wrapper>
      tags:
      {tags.data.map((tag) => {
        return (
          <span key={tag.id}>
            <Link href={`/tag/${tag.attributes.slug}`}>
              <a>{tag.attributes.displayName}</a>
            </Link>
          </span>
        );
      })}
    </Styled.Wrapper>
  );
};
