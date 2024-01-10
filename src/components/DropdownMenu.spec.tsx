import renderer from 'react-test-renderer';
import { DropdownMenu, DropdownMenuItem, useDropdownMenu } from './DropdownMenu';

describe('DropdownMenu', () => {
  const TestMenu = () => {
    const state = useDropdownMenu();

    return <DropdownMenu
      id='test-menu'
      state={state}
      text='Test Menu'
      variant='light'
    >
      <DropdownMenuItem onClick={jest.fn()} state={state}>Test Menu Item</DropdownMenuItem>
    </DropdownMenu>;
  };

  it('should render only the button if closed', () => {
    const component = renderer.create(<TestMenu/>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render the menu if open', () => {
    const component = renderer.create(<TestMenu/>);
    component.root.findByProps({ id: 'test-menu-button' }).props.toggleMenu();
    expect(component.toJSON()).toMatchSnapshot();
  });
});
