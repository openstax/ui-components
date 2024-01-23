import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import { DropdownMenu, DropdownMenuContext, DropdownMenuItemButton } from './DropdownMenu';

describe('DropdownMenu', () => {
  const TestMenu = (props: { disabled?: boolean; variant: 'light' | 'primary' | 'secondary'; width?: string }) => (
    <DropdownMenu
      disabled={props.disabled}
      id='test-menu'
      text='Test Menu'
      variant={props.variant}
      width={props.width}
    >
      <DropdownMenuItemButton onClick={jest.fn()}>Test Menu Item 1</DropdownMenuItemButton>
      <DropdownMenuItemButton onClick={jest.fn()}>Test Menu Item 2</DropdownMenuItemButton>
    </DropdownMenu>
  );

  it('should open on a button click and close on another button click', () => {
    const component = renderer.create(<TestMenu variant='light'/>);
    expect(component.toJSON()).toMatchSnapshot();

    component.root.findByProps({ 'aria-controls': 'test-menu' }).props.onClick();
    expect(component.toJSON()).toMatchSnapshot();
    component.root.findByProps({ 'aria-controls': 'test-menu' }).props.onClick();
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should open on a button click and close on an item click', () => {
    const component = renderer.create(<TestMenu variant='light'/>);
    expect(component.toJSON()).toMatchSnapshot();

    component.root.findByProps({ 'aria-controls': 'test-menu' }).props.onClick();
    expect(component.toJSON()).toMatchSnapshot();
    component.root.findAllByProps({ role: 'menuitem' })[0].props.onClick();
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should open on a button click and close on an outside click', () => {
    const { asFragment, getByText } = render(<TestMenu variant='primary'/>);
    expect(asFragment()).toMatchSnapshot();

    const menuButton = getByText('Test Menu');
    menuButton.click();
    expect(asFragment()).toMatchSnapshot();
    getByText('Test Menu Item 1').parentElement?.click();
    expect(asFragment()).toMatchSnapshot();
    menuButton.parentElement?.parentElement?.click();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should handle keyboard events', () => {
    const { asFragment, getByText } = render(<TestMenu variant='secondary' width='10rem'/>);
    const menuButton = getByText('Test Menu');
    expect(asFragment()).toMatchSnapshot();

    fireEvent.keyDown(menuButton, { key: 'ArrowUp' });
    expect(asFragment()).toMatchSnapshot();

    const menuItem1 = getByText('Test Menu Item 1');
    const menuItem2 = getByText('Test Menu Item 2');
    fireEvent.keyDown(menuItem2, { key: 'ArrowDown' });
    fireEvent.keyDown(menuItem1, { key: 'ArrowUp' });
    fireEvent.keyDown(menuItem2, { key: 'Home' });
    fireEvent.keyDown(menuItem1, { key: 'End' });
    fireEvent.keyDown(menuItem2, { key: 'ArrowUp' });
    fireEvent.keyDown(menuItem1, { key: 'ArrowDown' });
    fireEvent.keyDown(menuItem2, { key: 't' });
    fireEvent.keyDown(menuItem1, { key: 'T' });
    fireEvent.keyDown(menuItem2, { key: 'Escape' });
    expect(asFragment()).toMatchSnapshot();

    fireEvent.keyDown(menuButton, { key: 'ArrowDown' });
    expect(asFragment()).toMatchSnapshot();
  });

  it('should not open when disabled', () => {
    const component = renderer.create(<TestMenu disabled={true} variant='light'/>);
    expect(component.toJSON()).toMatchSnapshot();

    component.root.findByProps({ 'aria-controls': 'test-menu' }).props.onClick();
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe('DropdownMenuContext', () => {
  const ContextTester = () => {
    const { closeMenu, openMenu, toggleMenu } = React.useContext(DropdownMenuContext);

    return <>
      <div data-testid='toggle' onClick={toggleMenu}/>
      <div data-testid='open' onClick={() => openMenu('first')}/>
      <div data-testid='close' onClick={closeMenu}/>
    </>;
  }
  it('throws errors if used without a context provider', () => {
    const component = renderer.create(<ContextTester/>);
    expect(() => component.root.findByProps({ 'data-testid': 'toggle' }).props.onClick()).toThrowError(
      'Tried to call toggleMenu() without a DropdownMenuContext'
    );
    expect(() => component.root.findByProps({ 'data-testid': 'open' }).props.onClick()).toThrowError(
      'Tried to call openMenu() without a DropdownMenuContext'
    );
    expect(() => component.root.findByProps({ 'data-testid': 'close' }).props.onClick()).toThrowError(
      'Tried to call closeMenu() without a DropdownMenuContext'
    );
  });
});
