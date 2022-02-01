import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostGrid, PostGridProps } from '.';

import mock from './mock';

const props: PostGridProps = mock;

describe('<PostGrid />', () => {
  it('should render a post grid with 3 posts and match snapshot', () => {
    const { container } = renderTheme(<PostGrid {...props} />);

    expect(screen.getAllByRole('heading')).toHaveLength(3);
    expect(screen.getAllByRole('img')).toHaveLength(3);
    expect(container.querySelectorAll('p')).toHaveLength(3);

    expect(container).toMatchSnapshot();
  });
});
