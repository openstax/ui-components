import renderer from 'react-test-renderer';
import { DropdownMenu, DropdownMenuItem } from './DropdownMenu';

describe('DropdownMenu', () => {
  it('should render', () => {
    const tree = renderer.create(
      <DropdownMenu
        id='test-menu'
        text='Test Menu'
        variant='light'
      >
        <DropdownMenuItem onClick={jest.fn()}>Test Menu Item</DropdownMenuItem>
      </DropdownMenu>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
