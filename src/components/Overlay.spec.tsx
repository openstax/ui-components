import { act, render } from '@testing-library/react';
import { Overlay, OverlayBody, OverlayMask, OverlayWrapper } from './Overlay';
import userEvent from '@testing-library/user-event';

describe('Overlay', () => {
  let root: HTMLElement;

  beforeEach(() => {
    root = document.createElement('main');
    root.id = 'root';
    document.body.append(root);
  });

  it('matches snapshot', () => {
    render(
      <Overlay onClose={jest.fn()} show={true}>
        Inner content
      </Overlay>, { container: root }
    );
    expect(document.body).toMatchSnapshot();
  });

  it('hides', () => {
    render(
      <Overlay onClose={jest.fn()} show={false}>
        Inner content
      </Overlay>, { container: root }
    );
    expect(document.body).toMatchSnapshot();
  });

  it('composes render-callback classNames on the mask and wrapper', () => {
    render(
      <OverlayMask className={() => 'caller-mask'}>
        <OverlayWrapper className={() => 'caller-wrapper'}>
          <OverlayBody aria-label='Dialog'>Inner content</OverlayBody>
        </OverlayWrapper>
      </OverlayMask>, { container: root }
    );

    const mask = document.querySelector('.mask');
    expect(mask?.className).toContain('overlay-mask');
    expect(mask?.className).toContain('caller-mask');

    const wrapper = document.querySelector('.overlay-wrapper');
    expect(wrapper?.className).toContain('caller-wrapper');
  });

  // All of AriaLabelingProps is forwarded as a set, so no single aria-* prop
  // ends up on the mask instead of the dialog.
  it.each([
    ['aria-label', 'Overlay label'],
    ['aria-labelledby', 'overlay-title'],
    ['aria-describedby', 'overlay-description'],
    ['aria-details', 'overlay-details'],
  ])('forwards %s to the dialog rather than the mask', (prop, value) => {
    render(
      <Overlay onClose={jest.fn()} show={true} {...{ [prop]: value }}>
        Inner content
      </Overlay>, { container: root }
    );

    expect(document.querySelector('[role="dialog"]')?.getAttribute(prop)).toBe(value);
    expect(document.querySelector('.mask')?.getAttribute(prop)).toBeNull();
  });

  it('calls onClose when close button is clicked', async () => {
    const onClose = jest.fn();
    const user = userEvent.setup();

    await act(async() => {
      const overlay = render(<Overlay show onClose={onClose} />);
      await user.type(overlay.container, '{esc}');
    });

    expect(onClose).toHaveBeenCalled();
  });
});
