import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PostTag, PostTagProps } from '.';
import mock from './mock';

const props: PostTagProps = mock;

describe('<PostTag />', () => {
  it('should render a tag list with 2 tags', () => {
    const { container } = renderTheme(<PostTag {...props} />);

    expect(
      screen.getByText(props.tags.data[0].attributes.displayName),
    ).toBeInTheDocument();

    expect(
      screen.getByText(props.tags.data[1].attributes.displayName),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
