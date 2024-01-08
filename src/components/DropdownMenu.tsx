import React, { AnchorHTMLAttributes } from 'react';
import { ButtonVariant, applyButtonVariantStyles } from '../theme/buttons';
import styled from 'styled-components';

const openRotateDeg = 135;
const closedRotateDeg = -45;

const openPositioning = `left: calc(50% - 0.5rem);
    bottom: -0.57rem;`;
const closedPositioning = `right: 0;
    top: calc(50% - 0.7rem);`;

const StyledDropdownMenuButton = styled.button<{ open: boolean; variant: ButtonVariant }>`
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
  padding: 0 3rem;
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

  & + & {
    margin-left: 1.6rem;
  }

  :after {
    position: absolute;
    content: ' ';
    left: -0.57rem;
    clip-path: polygon(0 0, 100% 100%, 100% 0);
    display: block;
    height: 1rem;
    width: 1rem;
    background: #fff;
    border: 1px solid #ccc;
    transform: rotate(${(props) => props.open ? openRotateDeg : closedRotateDeg}deg);

    ${(props) => props.open ? openPositioning : closedPositioning}
  }
`;

const DropdownMenuButton = ({
    parentRef,
    buttonId,
    menuId,
    message,
    variant,
}: {
    parentRef: React.RefObject<HTMLDivElement>;
    buttonId: string;
    menuId: string;
    message: string;
    variant: ButtonVariant;
}) => {
    const [isOpen, setOpen] = React.useState<boolean>(false);
    const toggleMenu = React.useCallback(() => {
        setOpen(!isOpen);
    }, [isOpen]);

    // This is supposed to close it when another opens
    React.useEffect(() => {
        const outsideClick = (e: MouseEvent) => {
            if (isOpen && !parentRef.current?.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        window.addEventListener('click', outsideClick);

        return () => window.removeEventListener('click', outsideClick);
    }, [isOpen, parentRef]);

    return (
        <StyledDropdownMenuButton
            id={buttonId}
            type='button'
            aria-haspopup='true'
            aria-controls={menuId}
            aria-expanded={isOpen}
            onClick={toggleMenu}
            open={isOpen}
            variant={variant}
        >{message}</StyledDropdownMenuButton>
    );
}

export type DropdownMenuProps = {
    buttonId: string;
    buttonMessage: string;
    buttonVariant: ButtonVariant;
    menuId: string;
}

export const DropdownMenu = ({
    buttonId,
    buttonMessage,
    buttonVariant,
    children,
    menuId
}: React.PropsWithChildren<DropdownMenuProps>) => {
    const ref = React.useRef<HTMLDivElement>(null);

    return <div className='navmenu' ref={ref}>
        <DropdownMenuButton
            parentRef={ref}
            buttonId={buttonId}
            menuId={menuId}
            message={buttonMessage}
            variant={buttonVariant}
        />
        <div id={menuId} role='menu' aria-labelledby={buttonId}>
            {children}
        </div>
    </div>;
};

export const DropdownMenuItem = ({
    children,
    ...aProps
}: React.PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) => (
  <a role='menuitem' href='#' {...aProps}>{children}</a>
);
