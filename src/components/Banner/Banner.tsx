import { DismissIcon } from "../DismissIcon";
import { Html } from "../Html";
import { CloseButton, Severity, StyledBanner, BannerSeverity } from "./Banner.styles";

export const Banner = (props: {messages: string[]; severity: BannerSeverity; onDismiss?: () => void}) => {
  const numWarnings = props.messages.length;

  return <StyledBanner severity={props.severity}>
    <div>
      {props.severity !== 'error' ? <Severity>{props.severity === 'note' ? 'Note: ' : 'Warning: '}</Severity> : null}
      {props.messages.map((message, i) =>
        <Html block={numWarnings > 1} key={i}>
          {numWarnings > 1 ? `[${i + 1} of ${numWarnings}]: ${message}`: message}
        </Html>
      )}
    </div>
    {props.onDismiss
      ? <CloseButton severity={props.severity} onClick={props.onDismiss} aria-label='dismiss'>
          <DismissIcon aria-hidden='true' focusable='false' />
        </CloseButton>
      : null}
  </StyledBanner>;
};