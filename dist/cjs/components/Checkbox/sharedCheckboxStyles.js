"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkboxVariants = void 0;
const theme_1 = require("../../theme");
const checkmarksvgs_1 = require("../svgs/checkmarksvgs");
/**
 * Checkbox variant configuration for runtime theme lookups.
 * These values are used to bind CSS custom properties at the component level.
 */
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
