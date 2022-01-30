import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu, MenuProps } from '.';

import mock from './mock';

const props: MenuProps = mock;

describe('<Menu />', () => {
  it('should render button link', () => {
    renderTheme(<Menu {...props} />);

    const buttonLink = screen.getByRole('link', { name: 'Open or close menu' });
    const openIcon = screen.getByLabelText('Open Menu');

    expect(buttonLink).toBeInTheDocument();
    expect(openIcon).toBeInTheDocument();

    expect(screen.queryByLabelText('Close Menu')).not.toBeInTheDocument();
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  it('should open menu', () => {
    renderTheme(<Menu {...props} />);

    const buttonLink = screen.getByRole('link', { name: 'Open or close menu' });

    fireEvent.click(buttonLink);

    expect(screen.queryByLabelText('Close Menu')).toBeInTheDocument();

    expect(screen.queryByLabelText('Open Menu')).not.toBeInTheDocument();

    expect(screen.queryByRole('navigation')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Menu {...props} />);

    expect(container).toMatchSnapshot();
  });
});
