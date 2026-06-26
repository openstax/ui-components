import { H2, H3, Heading as HeadingComponent, Paragraph } from "./Text";

export const PText = () => (
  <>
    <Paragraph>Body text</Paragraph>
  </>
);

export const Heading = () => (
  <>
    <H2>H2 Heading text</H2>
    <H3>H3 Heading text</H3>
  </>
);

// Semantic level and visual style are independent: this renders an <h2>
// element (correct document outline) styled like an h3.
export const HeadingStyleOverride = () => (
  <HeadingComponent level={2} variant="h3">
    h2 element with h3 style
  </HeadingComponent>
);
