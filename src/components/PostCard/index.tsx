import Link from 'next/link';
import { BlogPostProps } from '../BlogPost';
import { Heading } from '../Heading';
import * as Styled from './styles';

export type PostCardProps = {
  id: string;
  attributes: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    allowComments: boolean;
    cover: {
      data: {
        id: string;
        attributes: {
          url: string;
          alternativeText: string;
        };
      };
    };
  };
};

export const PostCard = ({ id, attributes }: PostCardProps) => {
  return (
    <Styled.Wrapper>
      <Link href={`post/${attributes.slug}`}>
        <a>
          <Styled.Cover
            src={attributes.cover.data.attributes.url}
            alt={attributes.cover.data.attributes.alternativeText}
          />
        </a>
      </Link>

      <Heading as="h2" size="small">
        <Link href={`post/${attributes.slug}`}>
          <a>{attributes.title}</a>
        </Link>
      </Heading>

      <Styled.Excerpt>{attributes.excerpt}</Styled.Excerpt>
    </Styled.Wrapper>
  );
};
