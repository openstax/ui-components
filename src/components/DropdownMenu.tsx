import React, { AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';
import { ButtonVariant, applyButtonVariantStyles } from '../theme/buttons';

const StyledDropdownMenuButton = styled.button<{ variant: ButtonVariant }>`
  ${props => applyButtonVariantStyles(props.variant)}

  font-size: 1.6rem;
  line-height: 2rem;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4rem;
  padding: 0 0.5rem;
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  user-select: none;
  white-space: nowrap;

  &:not([disabled]) {
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.4;
  }

  :after {
    background: #fff;
    border: 1px solid #ccc;
    clip-path: polygon(0 0, 100% 100%, 100% 0);
    content: ' ';
    display: block;
    height: 0.5rem;
    margin: -0.5rem 0 0 0.5rem;
    transform: rotate(135deg);
    width: 0.5rem;
  }
`;

const DropdownMenuButton = ({
  disabled,
  id,
  isOpen,
  menuId,
  text,
  toggleMenu,
  variant,
}: {
  disabled?: boolean;
  id: string;
  isOpen: boolean;
  menuId: string;
  parentRef: React.RefObject<HTMLDivElement>;
  text: string;
  toggleMenu: () => void,
  variant: ButtonVariant;
}) => (
  <StyledDropdownMenuButton
    disabled={disabled}
    aria-haspopup='true'
    aria-controls={menuId}
    aria-expanded={isOpen}
    id={id}
    onClick={toggleMenu}
    type='button'
    variant={variant}
  >
    {text}
  </StyledDropdownMenuButton>
);

export const useDropdownMenu = (options?: { disabled: boolean }) => {
  const { disabled } = options ?? { disabled: false };

  const [isOpen, setOpen] = React.useState<boolean>(false);

  const closeMenu = React.useCallback(() => setOpen(false), []);

  const toggleMenu = React.useCallback(() => {
    setOpen(!disabled && !isOpen);
  }, [disabled, isOpen]);

  return { disabled, closeMenu, isOpen, toggleMenu };
};

export type DropdownMenuState = ReturnType<typeof useDropdownMenu>;

export type DropdownMenuProps = {
  id: string;
  state: DropdownMenuState;
  text: string;
  variant: ButtonVariant;
};

export const DropdownMenu = ({
  id,
  state,
  text,
  variant,
  children,
}: React.PropsWithChildren<DropdownMenuProps>) => {
  const buttonId = `${id}-button`;

  const { disabled, closeMenu, isOpen, toggleMenu } = state;

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Focus the first child when opened
    if (isOpen && ref.current) {
      const firstChild = ref.current.firstElementChild;
      if (firstChild instanceof HTMLElement) { firstChild.focus(); }
    }

    // Close the menu when clicking outside
    const closeOnOutsideClick = (e: MouseEvent) => {
      if (isOpen && !ref.current?.contains(e.target as Node)) {
          closeMenu();
      }
    };

    window.addEventListener('click', closeOnOutsideClick);

    return () => window.removeEventListener('click', closeOnOutsideClick);
  }, [isOpen, ref]);

  return <div className='navmenu' ref={ref}>
    <DropdownMenuButton
      disabled={disabled}
      id={buttonId}
      isOpen={isOpen}
      menuId={id}
      parentRef={ref}
      toggleMenu={toggleMenu}
      text={text}
      variant={variant}
    />
    <div id={id} role='menu' aria-labelledby={buttonId}>
      {isOpen ? children : null}
    </div>
  </div>;
};

export type DropdownMenuItemProps = React.PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> & {
  state: DropdownMenuState;
};

export const DropdownMenuItem = ({
  children,
  onClick,
  state,
  ...aProps
}: DropdownMenuItemProps) => {
  const { closeMenu } = state;

  const handleClick = React.useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) { onClick(event); }

    closeMenu();
  }, [closeMenu, onClick]);

  return <a role='menuitem' href='#' onClick={handleClick} {...aProps}>{children}</a>;
};
