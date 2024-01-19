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

const useDropdownMenu = ({ disabled }: { disabled?: boolean }) => {
  const [openFocus, setOpenFocus] = React.useState<'first' | 'last'>();
  const isOpen = openFocus !== undefined;

  const closeMenu = React.useCallback(() => setOpenFocus(undefined), []);
  const openMenu = React.useCallback(
    (focus: 'first' | 'last') => setOpenFocus(disabled ? undefined : focus), [disabled]
  );
  const toggleMenu = React.useCallback(() => isOpen ? closeMenu() : openMenu('first'), [isOpen]);

  return { disabled, closeMenu, isOpen, openFocus, openMenu, toggleMenu };
};

const DropdownMenuContext = React.createContext<ReturnType<typeof useDropdownMenu>>({
  closeMenu: () => { throw new Error('Tried to call closeMenu() without a DropdownMenuContext') },
  disabled: true,
  isOpen: false,
  openFocus: undefined,
  openMenu: () => { throw new Error('Tried to call openMenu() without a DropdownMenuContext') },
  toggleMenu: () => { throw new Error('Tried to call toggleMenu() without a DropdownMenuContext') },
});

const DropdownMenuButton = ({
  id,
  menuId,
  text,
  variant,
  width,
}: {
  id: string;
  menuId: string;
  text: string;
  variant: ButtonVariant;
  width?: string;
}) => {
  const { disabled, isOpen, openMenu, toggleMenu } = React.useContext(DropdownMenuContext);

  const onKeyDown = React.useCallback((event: React.KeyboardEvent<HTMLButtonElement>) => {
    // The browser already handles 'Enter', 'Space'
    switch (event.key) {
      case 'ArrowDown':
        openMenu('first');
        event.preventDefault();
        break;
      case 'ArrowUp':
        openMenu('last');
        event.preventDefault();
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

const focus = (element?: Element | null) => {
  if (element instanceof HTMLElement) { element.focus(); }
};

const DropdownMenuItemContainer = ({
  children, ...divProps
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => {
  const { openFocus } = React.useContext(DropdownMenuContext);

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Focus the first or last child when opened
    focus(openFocus === 'first' ? ref.current?.firstElementChild : ref.current?.lastElementChild);
  }, [openFocus, ref]);

  return <StyledDropdownMenuItemContainer {...divProps} ref={ref} role='menu'>
    {children}
  </StyledDropdownMenuItemContainer>;
};

export const DropdownMenu = ({
  children,
  disabled,
  id,
  text,
  variant,
  width,
}: React.PropsWithChildren<{
  disabled?: boolean;
  id: string;
  text: string;
  variant: ButtonVariant;
  width?: string;
}>) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const state = useDropdownMenu({ disabled });

  React.useEffect(() => {
    // Close the menu when clicking outside
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        state.closeMenu();
      }
    };

    window.addEventListener('click', closeOnOutsideClick);

    return () => window.removeEventListener('click', closeOnOutsideClick);
  }, [ref]);

  const buttonId = `${id}-button`;

  return <StyledDropdownMenu ref={ref}>
    <DropdownMenuContext.Provider value={state}>
      <DropdownMenuButton
        id={buttonId}
        menuId={id}
        text={text}
        variant={variant}
        width={width}
      />
      {state.isOpen ? <DropdownMenuItemContainer aria-labelledby={buttonId} id={id}>
        {children}
      </DropdownMenuItemContainer> : null}
    </DropdownMenuContext.Provider>
  </StyledDropdownMenu>;
};

const firstSibling = (element: Element) => element.parentElement?.firstElementChild;
const lastSibling = (element: Element) => element.parentElement?.lastElementChild;
const nextWithWraparound = (element: Element) => element.nextElementSibling ?? firstSibling(element);
const previousWithWraparound = (element: Element) => element.previousElementSibling ?? lastSibling(element);

export const DropdownMenuItemButton = ({
  children, onClick, ...buttonProps
}: React.PropsWithChildren<React.HTMLAttributes<HTMLButtonElement>>) => {
  const { closeMenu } = React.useContext(DropdownMenuContext);

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
        event.preventDefault();
        break;
      case 'ArrowDown':
        focus(nextWithWraparound(ref.current));
        event.preventDefault();
        break;
      case 'Home':
        focus(firstSibling(ref.current));
        event.preventDefault();
        break;
      case 'End':
        focus(lastSibling(ref.current));
        event.preventDefault();
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
