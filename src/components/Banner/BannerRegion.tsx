import { Banner, BannerSeverity } from "./Banner";

/**
 * A Banner that announces itself when it appears.
 *
 * The wrapper is always rendered and the Banner is conditional inside it,
 * which is the part that is easy to get wrong: a live region has to already
 * be in the accessibility tree before its content changes. Putting the role
 * on the Banner itself would insert the region and its content in the same
 * tick, and AT reads that as initial state rather than a change — Chrome +
 * NVDA usually announces it anyway, Safari + VoiceOver reliably does not.
 *
 * Use it when something the user or the app did causes the banner to
 * appear or change, such as a failed request. Use plain `Banner` for one
 * that is already on the page when it loads: steady-state information
 * inside a live region announces itself again on every remount, for a
 * change the user never made.
 *
 * `role="status"` is polite for every severity, deliberately. Mapping
 * `error` to `role="alert"` would make a banner rendered on page load
 * interrupt whatever the user was doing; severity describes how loud the
 * banner looks, not how urgently it needs to reach someone.
 */
export const BannerRegion = ({className, ...props}: {
  messages: string[];
  severity: BannerSeverity;
  onDismiss?: () => void;
  className?: string;
}) => <div role='status' className={className}>
  {props.messages.length ? <Banner {...props} /> : null}
</div>;
