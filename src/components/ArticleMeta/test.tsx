import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { ArticleMeta, ArticleMetaProps } from './index';

import mock from './mock';

const props: ArticleMetaProps = mock;
describe('<ArticleMeta />', () => {
  it('should render author and category links', () => {
    renderTheme(<ArticleMeta {...props} />);

    expect(screen.getByRole('link', { name: 'Fabio Celeste' })).toHaveAttribute(
      'href',
      '/author/fabio-celeste',
    );

    expect(screen.getByRole('link', { name: 'JavaScript' })).toHaveAttribute(
      'href',
      '/cetegory/java-script',
    );
  });

  it('should format date', () => {
    renderTheme(<ArticleMeta {...props} />);

    expect(screen.getByText('27 de jan. de 2022')).toHaveAttribute(
      'datetime',
      props.createdAt,
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<ArticleMeta {...props} />);

    expect(container).toMatchSnapshot();
  });
});
