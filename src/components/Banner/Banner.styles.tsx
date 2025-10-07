import styled from 'styled-components';
import { Button, ButtonLink } from '../Button';
import { colors } from '../../theme';

export type BannerSeverity = 'note' | 'warning' | 'error';

export const Severity = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`;

export const StyledBanner = styled.div<{severity: BannerSeverity}>`
  position: relative;
  background: ${({severity}) => severity === 'error' ? '#F8E8EA' : '#fff5e0'};
  color: ${({severity}) => severity === 'error' ? colors.palette.darkRed : '#976502'};
  border: ${({severity}) => severity === 'error' ? `1px solid ${colors.palette.lightRed}` : '1px solid #fdbd3e'};
  padding: .6rem 1.6rem;
  margin: 0 0 1.6rem 0;
  line-height: 2rem;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: ${colors.palette.mediumBlue};
  
    &:hover {
      text-decoration: underline;
      color: ${colors.link.hover}
    }
  }

  ${ButtonLink} {
    font-size: 1.6rem;
  }
`;

export const CloseButton = styled(Button)<{severity: BannerSeverity}>`
  color: ${({severity}) => severity === 'error' ? colors.palette.darkRed : '#976502'};
  overflow: visible;
  background: none;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  box-shadow: none;
  margin-left: 2.4rem;

  &:not([disabled]):hover,
  &:not([disabled]):active {
    background: none;
  }
`;