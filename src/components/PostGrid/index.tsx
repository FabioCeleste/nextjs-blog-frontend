import { PostCard, PostCardProps } from '../PostCard';
import * as Styled from './styles';

export type PostGridProps = {
  posts: {
    data: PostCardProps[];
  };
};

export const PostGrid = ({ posts }: PostGridProps) => {
  return (
    <Styled.Wrapper>
      {posts.data.map((post) => (
        <PostCard {...post} key={post.id} />
      ))}
    </Styled.Wrapper>
  );
};
