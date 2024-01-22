import renderer from 'react-test-renderer';
import { DropdownMenu, DropdownMenuItemButton } from './DropdownMenu';

describe('DropdownMenu', () => {
  const TestMenu = () => (
    <DropdownMenu
      id='test-menu'
      text='Test Menu'
      variant='light'
    >
      <DropdownMenuItemButton onClick={jest.fn()}>Test Menu Item</DropdownMenuItemButton>
    </DropdownMenu>
  );

  it('should render only the button if closed', () => {
    const component = renderer.create(<TestMenu/>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render the menu if open', () => {
    const component = renderer.create(<TestMenu/>);
    // Finding by the button's id finds the parent React component, which doesn't have props.onClick()
    component.root.findByProps({ 'aria-controls': 'test-menu' }).props.onClick();
    expect(component.toJSON()).toMatchSnapshot();
  });
});
