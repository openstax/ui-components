import { LabelHTMLAttributes, PropsWithChildren } from "react";
import { colors } from "../theme";
import styled from "styled-components";
import { InputHTMLAttributes } from "react";

export type CheckboxVariant = keyof typeof checkboxVariants;
export type CheckboxSize = 1.4 | 1.6 | 1.8 | 2;

export const checkboxVariants = {
  primary: {
    backgroundColor: colors.palette.mediumBlue,
    color: 'inherit',
    unCheckedBorder: `1px solid ${colors.palette.neutralThin}`,
    checkedBorder: `1px solid ${colors.palette.mediumBlue}`,
    backgroundImage: 'data:image/svg+xml,<svg height="125px" width="125px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.837 17.837" xml:space="preserve" fill="%23000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><path style="fill:%23fff;" d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27 c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0 L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"></path></g></g></svg>'
  },
  light: {
    backgroundColor: colors.palette.white,
    color: 'inherit',
    unCheckedBorder: `1px solid ${colors.palette.pale}`,
    checkedBorder: `1px solid ${colors.palette.pale}`,
    backgroundImage: 'data:image/svg+xml,<svg height="125px" width="125px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.837 17.837" xml:space="preserve" fill="%23000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><path style="fill:%235e5e5e;" d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27 c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0 L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"></path></g></g></svg>'
  },
  error: {
    backgroundColor: colors.palette.paleRed,
    color: colors.palette.darkRed,
    unCheckedBorder: `1px solid ${colors.palette.lightRed}`,
    checkedBorder: `1px solid ${colors.palette.lightRed}`,
    backgroundImage: 'data:image/svg+xml,<svg height="125px" width="125px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.837 17.837" xml:space="preserve" fill="%23000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><path style="fill:%23C22032;" d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27 c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0 L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"></path></g></g></svg>'
  },
  disabled: {
    backgroundColor: colors.palette.white,
    color: 'inherit',
    unCheckedBorder: `1px solid ${colors.palette.pale}`,
    checkedBorder: `1px solid ${colors.palette.pale}`,
    backgroundImage: 'none'
  }
} as const;

const StyledLabel = styled.label<{ bold: boolean; variant: CheckboxVariant; isDisabled?: boolean; }>`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  font-weight: ${props => props.bold ? 700 : 400};
  color: ${(props => props.isDisabled ? colors.palette.neutralLight : checkboxVariants[props.variant].color)};
`;

// https://moderncss.dev/pure-css-custom-checkbox-style/
const StyledInput = styled.input<{ variant: CheckboxVariant; checkboxSize: CheckboxSize; isDisabled?: boolean; }>`
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: ${colors.palette.white};
  opacity: ${(props => props.isDisabled ? '0.4' : '1')};
  border: ${props => props.isDisabled ? `1px solid ${colors.palette.pale}` : checkboxVariants[props.variant].unCheckedBorder};
  border-radius: 0.2rem;
  transform: translateY(-0.075em);
  width: ${props => props.checkboxSize}rem;
  height: ${props => props.checkboxSize}rem;
  margin: 0 1.6rem 0 0;
  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: ${props => props.checkboxSize}rem;
    height: ${props => props.checkboxSize}rem;
    border: ${props => checkboxVariants[props.variant].checkedBorder};
    border-radius: 0.2rem;
    transform: scale(0);
    background-color: ${props => checkboxVariants[props.variant].backgroundColor};
    background-image: url('${props => checkboxVariants[props.variant].backgroundImage}');
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
  }

  &:checked::before {
    transform: scale(1);
    opacity: ${(props => props.isDisabled ? 0 : 1)};
  }
  `;

type CheckboxProps = PropsWithChildren<
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  variant?: CheckboxVariant;
  size?: CheckboxSize;
  bold?: boolean;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}>;

export const Checkbox = ({ children, disabled, variant = 'primary', bold = false, size = 1.6, labelProps, ...props }: CheckboxProps) => {
  return (
    <StyledLabel bold={bold} variant={variant} isDisabled={disabled} {...labelProps}>
      <StyledInput {...props} type="checkbox" variant={variant} checkboxSize={size} isDisabled={disabled} />
      {children}
    </StyledLabel>
  );
};
