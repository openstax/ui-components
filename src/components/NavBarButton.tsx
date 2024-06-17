import { Button, ButtonProps } from "react-aria-components";
import styled from "styled-components";

export type NavBarButtonProps = Omit<ButtonProps, "aria-label"> & {
  label?: string;
  icon?: string | React.ReactNode;
  className?: string;
  "aria-label"?: string;
} & ({ label: string } | { "aria-label": string });

export const NavBarButton = styled(
  ({
    label,
    icon,
    className,
    "aria-label": ariaLabel,
    ...props
  }: NavBarButtonProps) => (
    <Button className={className} {...props}>
      {icon &&
        (typeof icon === "string" ? (
          <img aria-hidden="true" src={icon} alt="" />
        ) : (
          icon
        ))}
      {label ? <span>{label}</span> : null}
    </Button>
  ),
)`
  border: none;
  background: none;
  padding: 0;
  min-height: 4rem;
  min-width: 4rem;
  height: 100%;
  display: inline-flex;
  place-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 500;

  img {
    max-height: 100%;
  }

  img + *,
  svg + * {
    margin-left: 0.8rem;
  }
`;
