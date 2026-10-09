import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { BannerRegion } from "./BannerRegion";

describe('BannerRegion', () => {
  it('renders the region before there is anything to announce', () => {
    const { getByRole } = render(<BannerRegion messages={[]} severity='warning' />);
    expect(getByRole('status')).toBeEmptyDOMElement();
  });

  it('is :empty until there is something to announce, which its layout rule depends on', () => {
    const { getByRole, rerender } = render(<BannerRegion messages={[]} severity='warning' />);
    expect(getByRole('status').matches(':empty')).toBe(true);

    rerender(<BannerRegion messages={['Heads up']} severity='warning' />);
    expect(getByRole('status').matches(':empty')).toBe(false);
  });

  it('renders messages from the first render as page content, not after an effect', () => {
    // effects do not run in a server render, so this only passes if the banner is in the
    // first render's output
    const html = renderToStaticMarkup(<BannerRegion messages={['Heads up']} severity='warning' />);

    expect(html).toContain('role="status"');
    expect(html).toContain('Heads up');
  });

  it('keeps its own class alongside a caller class', () => {
    const { getByRole } = render(<BannerRegion messages={[]} severity='warning' className='caller' />);

    expect(getByRole('status')).toHaveClass('banner-region', 'caller');
  });

  it('announces into the region that was already there', () => {
    const { getByRole, rerender } = render(<BannerRegion messages={[]} severity='warning' />);
    const region = getByRole('status');

    rerender(<BannerRegion messages={['Heads up']} severity='warning' />);

    // same element, new content — a region that arrives together with its
    // content is the case AT misses, so this is the property worth asserting
    expect(getByRole('status')).toBe(region);
    expect(region).toHaveTextContent('Heads up');
  });

  it('passes props through to the banner', () => {
    const onDismiss = jest.fn();
    const { getByLabelText } = render(
      <BannerRegion messages={['Heads up']} severity='error' onDismiss={onDismiss} />
    );

    fireEvent.click(getByLabelText('dismiss'));

    expect(onDismiss).toHaveBeenCalled();
  });
});
