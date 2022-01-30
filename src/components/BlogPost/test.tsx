import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { BlogPost, BlogPostProps } from '.';

import mock from './mock';

const props: BlogPostProps = mock;

describe('<BlogPost />', () => {
  it('should render the post with img and title', () => {
    const { container } = renderTheme(<BlogPost {...props} />);

    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: 'Primeiro Post' }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
