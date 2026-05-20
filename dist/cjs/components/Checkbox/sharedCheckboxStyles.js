"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkboxSelectionSlotCheckedStyles = exports.checkboxInputStyles = exports.checkboxLabelStyles = exports.checkboxVariants = void 0;
const styled_components_1 = require("styled-components");
const theme_1 = require("../../theme");
const checkmarksvgs_1 = require("../svgs/checkmarksvgs");
exports.checkboxVariants = {
    primary: {
        backgroundColor: theme_1.colors.palette.mediumBlue,
        color: 'inherit',
        unCheckedBorder: `1px solid ${theme_1.colors.palette.neutralThin}`,
        checkedBorder: `1px solid ${theme_1.colors.palette.mediumBlue}`,
        backgroundImage: checkmarksvgs_1.whiteCheckmark
    },
    light: {
        backgroundColor: theme_1.colors.palette.white,
        color: 'inherit',
        unCheckedBorder: `1px solid ${theme_1.colors.palette.pale}`,
        checkedBorder: `1px solid ${theme_1.colors.palette.pale}`,
        backgroundImage: checkmarksvgs_1.grayCheckmark
    },
    error: {
        backgroundColor: theme_1.colors.palette.paleRed,
        color: theme_1.colors.palette.darkRed,
        unCheckedBorder: `1px solid ${theme_1.colors.palette.lightRed}`,
        checkedBorder: `1px solid ${theme_1.colors.palette.lightRed}`,
        backgroundImage: checkmarksvgs_1.redCheckmark
    },
    disabled: {
        backgroundColor: theme_1.colors.palette.white,
        color: 'inherit',
        unCheckedBorder: `1px solid ${theme_1.colors.palette.pale}`,
        checkedBorder: `1px solid ${theme_1.colors.palette.pale}`,
        backgroundImage: 'none'
    }
};
// Checkbox label styles
exports.checkboxLabelStyles = (0, styled_components_1.css) `
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
  color: ${({ isDisabled, variant }) => isDisabled
    ? theme_1.colors.palette.neutralLight
    : exports.checkboxVariants[variant].color};
`;
// Checkbox input/selection styles
exports.checkboxInputStyles = (0, styled_components_1.css) `
  appearance: none;
  background-color: ${theme_1.colors.palette.white};
  opacity: ${({ isDisabled }) => (isDisabled ? '0.4' : '1')};
  border: ${({ isDisabled, variant }) => isDisabled
    ? `1px solid ${theme_1.colors.palette.pale}`
    : exports.checkboxVariants[variant].unCheckedBorder};
  border-radius: 0.2rem;
  transform: translateY(-0.075em);
  width: ${({ checkboxSize }) => checkboxSize}rem;
  height: ${({ checkboxSize }) => checkboxSize}rem;
  margin: 0 1.6rem 0 0;
  display: grid;
  place-content: center;

  &::before {
    content: "";
    border-radius: 0.2rem;
    width: ${({ checkboxSize }) => checkboxSize}rem;
    height: ${({ checkboxSize }) => checkboxSize}rem;
    border: ${({ variant }) => exports.checkboxVariants[variant].checkedBorder};
    border-radius: 0.2rem;
    transform: scale(0);
    background-color: ${({ variant }) => exports.checkboxVariants[variant].backgroundColor};
    background-image: url('${({ variant }) => exports.checkboxVariants[variant].backgroundImage}');
    background-size: 80%;
    background-position: center;
    background-repeat: no-repeat;
    transform: scale(0);
  }

  &:checked::before {
    transform: scale(1);
    opacity: ${({ isDisabled }) => (isDisabled ? 0 : 1)};
  }
`;
exports.checkboxSelectionSlotCheckedStyles = (0, styled_components_1.css) `
  transform: scale(1);
  opacity: ${({ isDisabled }) => (isDisabled ? 0 : 1)};
`;
