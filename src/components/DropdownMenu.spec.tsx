import { render } from '@testing-library/react';
import { DropdownMenu, DropdownMenuItem } from './DropdownMenu';

describe('DropdownMenu', () => {
  const TestMenu = (props: { disabled?: boolean; variant: 'light' | 'primary' | 'secondary'; width?: string }) => (
    <DropdownMenu
      disabled={props.disabled}
      id='test-menu'
      text='Test Menu'
      variant={props.variant}
      width={props.width}
    >
      <DropdownMenuItem onAction={jest.fn()}>Test Menu Item 1</DropdownMenuItem>
      <DropdownMenuItem onAction={jest.fn()}>Test Menu Item 2</DropdownMenuItem>
    </DropdownMenu>
  );

  it('matches snapshots', () => {
    expect(render(<TestMenu variant='primary'/>).asFragment()).toMatchSnapshot();
    expect(render(<TestMenu variant='light' width={'20rem'}/>).asFragment()).toMatchSnapshot();
  });
});
