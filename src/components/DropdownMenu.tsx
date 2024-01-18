import React from 'react';
import styled from 'styled-components';
import { ButtonVariant, applyButtonVariantStyles } from '../theme/buttons';
import { palette } from '../theme/palette';

const StyledDropdownMenu = styled.div`
  position: relative;
`;

const StyledDropdownMenuButton = styled.button<{ variant: ButtonVariant; width?: string }>`
  ${(props) => applyButtonVariantStyles(props.variant)}

  align-items: center;
  border: 0;
  border-radius: 0.5rem;
  box-shadow: 0px 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  display: inline-flex;
  flex-direction: row;
  font-size: 1.6rem;
  height: 2.5rem;
  justify-content: center;
  line-height: 2rem;
  padding: 0 0.5rem;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  user-select: none;
  white-space: nowrap;
  ${(props) => props.width ? `width: ${props.width}` : null}
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  &:disabled {
    opacity: 0.4;
  }

  &:not([disabled]) {
    cursor: pointer;
  }

  :after {
    background: ${(props) => props.variant === 'light' ? palette.black : palette.white};
    clip-path: polygon(0 0, 100% 100%, 100% 0);
    content: ' ';
    display: block;
    height: 0.5rem;
    margin: -0.25rem 0 0 0.5rem;
    transform: rotate(135deg);
    width: 0.5rem;
  }
`;

const StyledDropdownMenuItemContainer = styled.div`
  background-color: ${palette.white};
  border: 1px solid ${palette.pale};
  padding: 0.3rem 0;
  position: absolute;
  z-index: 10;
`;

const StyledDropdownMenuItemButton = styled.button`
  align-items: center;
  background-color: ${palette.white};
  border: 0;
  border-radius: 0;
  box-shadow: none;
  cursor: pointer;
  display: block;
  flex-direction: row;
  font-size: 1.6rem;
  height: 2.5rem;
  justify-content: center;
  line-height: 2rem;
  margin: 0;
  padding: 0 0.5rem;
  text-align: left;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  user-select: none;
  white-space: nowrap;
  width: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  &:hover {
    background-color: ${palette.pale};
  }
`;

const DropdownMenuButton = ({
  disabled,
  id,
  isOpen,
  menuId,
  openMenu,
  text,
  toggleMenu,
  variant,
  width,
}: {
  disabled?: boolean;
  id: string;
  isOpen: boolean;
  menuId: string;
  text: string;
  openMenu: (focus: 'first' | 'last') => void,
  toggleMenu: () => void,
  variant: ButtonVariant;
  width?: string;
}) => {
  const onKeyDown = React.useCallback((event: React.KeyboardEvent<HTMLButtonElement>) => {
    // The browser already handles 'Enter', 'Space'
    switch (event.key) {
      case 'ArrowDown':
        openMenu('first');
        break;
      case 'ArrowUp':
        openMenu('last');
        break;
    }
  }, [openMenu]);

  return <StyledDropdownMenuButton
    aria-haspopup='true'
    aria-controls={menuId}
    aria-expanded={isOpen}
    disabled={disabled}
    id={id}
    onClick={toggleMenu}
    onKeyDown={onKeyDown}
    type='button'
    variant={variant}
    width={width}
  >
    {text}
  </StyledDropdownMenuButton>;
};

export const useDropdownMenu = (options?: { disabled: boolean }) => {
  const { disabled } = options ?? { disabled: false };

  const [openFocus, setOpenFocus] = React.useState<'first' | 'last'>();
  const isOpen = openFocus !== undefined;

  const closeMenu = React.useCallback(() => setOpenFocus(undefined), []);
  const openMenu = React.useCallback(
    (focus: 'first' | 'last') => setOpenFocus(disabled ? undefined : focus), [disabled]
  );
  const toggleMenu = React.useCallback(() => isOpen ? closeMenu() : openMenu('first'), [isOpen]);

  return { disabled, closeMenu, isOpen, openFocus, openMenu, toggleMenu };
};

const focus = (element?: Element | null) => {
  if (element instanceof HTMLElement) { element.focus(); }
}

const DropdownMenuItemContainer = ({
  children, openFocus, ...divProps
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> & { openFocus: 'first' | 'last' | undefined }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Focus the first or last child when opened
    focus(openFocus === 'first' ? ref.current?.firstElementChild : ref.current?.lastElementChild);
  }, [openFocus, ref]);

  return <StyledDropdownMenuItemContainer {...divProps} ref={ref} role='menu'>
    {children}
  </StyledDropdownMenuItemContainer>;
};

export type DropdownMenuState = ReturnType<typeof useDropdownMenu>;

export type DropdownMenuProps = {
  id: string;
  state: DropdownMenuState;
  text: string;
  variant: ButtonVariant;
  width?: string;
};

export const DropdownMenu = ({
  id,
  state,
  text,
  variant,
  children,
  width,
}: React.PropsWithChildren<DropdownMenuProps>) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const { closeMenu, disabled, isOpen, openFocus, openMenu, toggleMenu } = state;

  React.useEffect(() => {
    // Close the menu when clicking outside
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        closeMenu();
      }
    };

    window.addEventListener('click', closeOnOutsideClick);

    return () => window.removeEventListener('click', closeOnOutsideClick);
  }, [ref]);

  const buttonId = `${id}-button`;

  return <StyledDropdownMenu ref={ref}>
    <DropdownMenuButton
      disabled={disabled}
      id={buttonId}
      isOpen={isOpen}
      menuId={id}
      openMenu={openMenu}
      toggleMenu={toggleMenu}
      text={text}
      variant={variant}
      width={width}
    />
    {isOpen ? <DropdownMenuItemContainer aria-labelledby={buttonId} id={id} openFocus={openFocus}>
      {children}
    </DropdownMenuItemContainer> : null}
  </StyledDropdownMenu>;
};

export type DropdownMenuItemButtonProps = React.PropsWithChildren<React.HTMLAttributes<HTMLButtonElement>> & {
  state: DropdownMenuState;
};

const firstSibling = (element: Element) => element.parentElement?.firstElementChild;
const lastSibling = (element: Element) => element.parentElement?.lastElementChild;
const nextWithWraparound = (element: Element) => element.nextElementSibling ?? firstSibling(element);
const previousWithWraparound = (element: Element) => element.previousElementSibling ?? lastSibling(element);

export const DropdownMenuItemButton = ({
  children,
  onClick,
  state,
  ...buttonProps
}: DropdownMenuItemButtonProps) => {
  const { closeMenu } = state;

  const handleClick = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) { onClick(event); }

    closeMenu();
  }, [closeMenu, onClick]);

  const ref = React.useRef<HTMLButtonElement>(null);

  const onKeyDown = React.useCallback((event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (!ref.current) { return; }

    // The browser already handles 'Enter', 'Space'
    switch (event.key) {
      case 'Escape':
        closeMenu();
        focus(ref.current.parentElement?.parentElement?.firstElementChild);
        break;
      case 'ArrowUp':
        focus(previousWithWraparound(ref.current));
        break;
      case 'ArrowDown':
        focus(nextWithWraparound(ref.current));
        break;
      case 'Home':
        focus(firstSibling(ref.current));
        break;
      case 'End':
        focus(lastSibling(ref.current));
        break;
      default:
        if (/^[A-Za-z]$/.test(event.key)) {
          for (let element: Element | null | undefined = nextWithWraparound(ref.current);
               element !== ref.current && element instanceof HTMLElement;
               element = nextWithWraparound(element)) {
            if (element.innerText.toLowerCase().startsWith(event.key.toLowerCase())) {
              focus(element);
              break;
            }
          }
        }
    }
  }, [closeMenu]);

  return <StyledDropdownMenuItemButton
           {...buttonProps}
           onClick={handleClick}
           onKeyDown={onKeyDown}
           ref={ref}
           role='menuitem'>
    {children}
  </StyledDropdownMenuItemButton>;
};
