import React, { AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';
import { ButtonVariant, applyButtonVariantStyles } from '../theme/buttons';

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
    disabled,
    id,
    menuId,
    parentRef,
    text,
    variant,
}: {
    disabled?: boolean;
    id: string;
    menuId: string;
    parentRef: React.RefObject<HTMLDivElement>;
    text: string;
    variant: ButtonVariant;
}) => {
    const [isOpen, setOpen] = React.useState<boolean>(false);
    const toggleMenu = React.useCallback(() => {
        setOpen(!disabled && !isOpen);
    }, [disabled, isOpen]);

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
            disabled={disabled}
            aria-haspopup='true'
            aria-controls={menuId}
            aria-expanded={isOpen}
            id={id}
            onClick={toggleMenu}
            open={isOpen}
            type='button'
            variant={variant}
        >{text}</StyledDropdownMenuButton>
    );
}

export type DropdownMenuProps = {
    id: string;
    disabled?: boolean;
    text: string;
    variant: ButtonVariant;
}

export const DropdownMenu = ({
    id,
    disabled,
    text,
    variant,
    children,
}: React.PropsWithChildren<DropdownMenuProps>) => {
    const buttonId = `${id}-button`;
    const ref = React.useRef<HTMLDivElement>(null);

    return <div className='navmenu' ref={ref}>
        <DropdownMenuButton
            disabled={disabled}
            id={buttonId}
            menuId={id}
            parentRef={ref}
            text={text}
            variant={variant}
        />
        <div id={id} role='menu' aria-labelledby={buttonId}>
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
