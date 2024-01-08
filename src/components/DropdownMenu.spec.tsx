import renderer from 'react-test-renderer';
import { DropdownMenu, DropdownMenuItem } from './DropdownMenu';

describe('DropdownMenu', () => {
  it('should render', () => {
    const tree = renderer.create(
      <DropdownMenu
        buttonId='test-button'
        buttonMessage='Test Menu'
        buttonVariant='light'
        menuId='test-menu'
      >
        <DropdownMenuItem onClick={jest.fn()}>Test Menu Item</DropdownMenuItem>
      </DropdownMenu>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
