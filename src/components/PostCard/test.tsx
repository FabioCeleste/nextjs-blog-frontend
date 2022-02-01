import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostCard, PostCardProps } from '.';

import mock from './mock';

const props: PostCardProps = mock;

describe('<PostCard />', () => {
  it('should render a card post with img cover title and excerpt', () => {
    renderTheme(<PostCard {...props} />);

    expect(
      screen.getByRole('heading', { name: props.attributes.title }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', {
        name: props.attributes.cover.data.attributes.alternativeText,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(props.attributes.excerpt)).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    const { container } = renderTheme(<PostCard {...props} />);
    expect(container).toMatchSnapshot();
  });
});
