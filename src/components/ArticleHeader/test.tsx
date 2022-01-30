import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ArticleHeader, ArticleHeaderProps } from '.';
import mock from './mock';

const props: ArticleHeaderProps = mock;

describe('<ArticleHeader />', () => {
  it('should render articleHeader with Header component, title, excerpt, cover image and separator', () => {
    const { container } = renderTheme(<ArticleHeader {...props} />);

    expect(
      screen.getByRole('heading', { name: props.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument();
    expect(screen.getByText(props.excerpt)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
