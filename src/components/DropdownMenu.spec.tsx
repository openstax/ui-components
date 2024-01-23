import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import { DropdownMenu, DropdownMenuContext, DropdownMenuItemButton } from './DropdownMenu';

describe('DropdownMenu', () => {
  const TestMenu = () => (
    <DropdownMenu
      id='test-menu'
      text='Test Menu'
      variant='light'
    >
      <DropdownMenuItemButton onClick={jest.fn()}>Test Menu Item 1</DropdownMenuItemButton>
      <DropdownMenuItemButton onClick={jest.fn()}>Test Menu Item 2</DropdownMenuItemButton>
    </DropdownMenu>
  );

  it('should open on a button click and close on an item click or outside click', () => {
    const component = renderer.create(<TestMenu/>);
    expect(component.toJSON()).toMatchSnapshot();

    component.root.findByProps({ 'aria-controls': 'test-menu' }).props.onClick();
    expect(component.toJSON()).toMatchSnapshot();
    component.root.findAllByProps({ role: 'menuitem' })[0].props.onClick();
    expect(component.toJSON()).toMatchSnapshot();

    component.root.findByProps({ 'aria-controls': 'test-menu' }).props.onClick();
    expect(component.toJSON()).toMatchSnapshot();
    window.dispatchEvent(new MouseEvent('click'))
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should handle keyboard events', () => {
    const { asFragment, getByText } = render(<TestMenu/>);
    const menuButton = getByText('Test Menu');
    expect(asFragment()).toMatchSnapshot();

    fireEvent.keyDown(menuButton, { key: 'ArrowDown' });
    expect(asFragment()).toMatchSnapshot();

    const menuItem = getByText('Test Menu Item 1');
    fireEvent.keyDown(menuItem, { key: 'ArrowUp' });
    fireEvent.keyDown(menuItem, { key: 'ArrowDown' });
    fireEvent.keyDown(menuItem, { key: 'End' });
    fireEvent.keyDown(menuItem, { key: 'Home' });
    fireEvent.keyDown(menuItem, { key: 'ArrowDown' });
    fireEvent.keyDown(menuItem, { key: 'ArrowUp' });
    fireEvent.keyDown(menuItem, { key: 't' });
    fireEvent.keyDown(menuItem, { key: 'T' });
    fireEvent.keyDown(menuItem, { key: 'Escape' });
    expect(asFragment()).toMatchSnapshot();

    fireEvent.keyDown(menuButton, { key: 'ArrowUp' });
    expect(asFragment()).toMatchSnapshot();
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
