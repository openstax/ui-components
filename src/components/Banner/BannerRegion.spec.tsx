import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { BannerRegion } from "./BannerRegion";

describe('BannerRegion', () => {
  it('renders the region before there is anything to announce', () => {
    const { getByRole } = render(<BannerRegion messages={[]} severity='warning' />);
    expect(getByRole('status')).toBeEmptyDOMElement();
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
