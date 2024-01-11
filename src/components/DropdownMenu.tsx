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
  border-radius: 5px;
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
    background: ${palette.white};
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
  position: fixed;
`;

const StyledDropdownMenuItem = styled.button`
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
  text,
  toggleMenu,
  variant,
  width,
}: {
  disabled?: boolean;
  id: string;
  isOpen: boolean;
  menuId: string;
  parentRef: React.RefObject<HTMLDivElement>;
  text: string;
  toggleMenu: () => void,
  variant: ButtonVariant;
  width?: string;
}) => (
  <StyledDropdownMenuButton
    aria-haspopup='true'
    aria-controls={menuId}
    aria-expanded={isOpen}
    disabled={disabled}
    id={id}
    onClick={toggleMenu}
    type='button'
    variant={variant}
    width={width}
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

  return <StyledDropdownMenu ref={ref}>
    <DropdownMenuButton
      disabled={disabled}
      id={buttonId}
      isOpen={isOpen}
      menuId={id}
      parentRef={ref}
      toggleMenu={toggleMenu}
      text={text}
      variant={variant}
      width={width}
    />
    {isOpen ? <StyledDropdownMenuItemContainer id={id} role='menu' aria-labelledby={buttonId}>
      {children}
    </StyledDropdownMenuItemContainer> : null}
  </StyledDropdownMenu>;
};

export type DropdownMenuItemProps = React.PropsWithChildren<React.HTMLAttributes<HTMLButtonElement>> & {
  state: DropdownMenuState;
};

export const DropdownMenuItem = ({
  children,
  onClick,
  state,
  ...aProps
}: DropdownMenuItemProps) => {
  const { closeMenu } = state;

  const handleClick = React.useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) { onClick(event); }

    closeMenu();
  }, [closeMenu, onClick]);

  return <StyledDropdownMenuItem role='menuitem' onClick={handleClick} {...aProps}>
    {children}
  </StyledDropdownMenuItem>;
};
