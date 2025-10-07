import { ButtonLink } from "../Button";
import { CloseButton, StyledBanner } from "./Banner.styles";
import { DismissIcon } from "../DismissIcon";


export const GracePeriodNotification =
(props: {date: string; paymentsFaqUrl: string; handleCheckout: () => void; onDismiss: () => void}) =>
  <StyledBanner severity='warning'>
    <div>
      <span>Note: </span>
      Your free access to this course expires on {props.date}. Purchase extended course access <ButtonLink 
      onClick={props.handleCheckout}>here</ButtonLink> or read more about payments on our <a href={props.paymentsFaqUrl} 
      target="_blank" rel="noreferrer">FAQ page</a>.
    </div>
    <CloseButton severity='warning' onClick={props.onDismiss} aria-label='dismiss'>
      <DismissIcon aria-hidden='true' focusable='false' />
    </CloseButton>
  </StyledBanner>;