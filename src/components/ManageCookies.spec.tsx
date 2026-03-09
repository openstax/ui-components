/* eslint-disable @typescript-eslint/no-explicit-any */
import renderer, { act } from 'react-test-renderer';
import { render, cleanup } from '@testing-library/react';
import { ManageCookiesLink } from "./ManageCookies";

describe('ManageCookies', () => {
  describe('without cookieYes', () => {

    it('renders nothing', () => {
      const tree = renderer.create(
        <ManageCookiesLink />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders nothing, even a wrapper', () => {
      const tree = renderer.create(
        <ManageCookiesLink wrapper={button => <div>{button}</div>} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('when CookieYes loads', () => {
    const bannerLoadEvent = new CustomEvent('cookieyes_banner_load', {});
    let component: renderer.ReactTestRenderer;

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('renders button', () => {
      act(() => {
        component = renderer.create(
          <ManageCookiesLink />
        );
      });
      act(() => { document.dispatchEvent(bannerLoadEvent); });
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders button with className', () => {
      act(() => {
        component = renderer.create(
          <ManageCookiesLink className='test' />
        );
      });
      act(() => { document.dispatchEvent(bannerLoadEvent); });
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders button with content and correct class', () => {
      act(() => {
        component = renderer.create(
          <ManageCookiesLink>some content</ManageCookiesLink>
        );
      });
      act(() => { document.dispatchEvent(bannerLoadEvent); });
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders button in wrapper', () => {
      act(() => {
        component = renderer.create(
          <ManageCookiesLink wrapper={button => <div>{button}</div>} />
        );
      });
      act(() => { document.dispatchEvent(bannerLoadEvent); });
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('calls additional callback', () => {
      const onClick = jest.fn();
      act(() => {
        component = renderer.create(
          <ManageCookiesLink onClick={onClick} />
        );
      });
      act(() => { document.dispatchEvent(bannerLoadEvent); });
      component.root.findByType('button').props.onClick();
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe('with CookieYes already loaded', () => {
    let component: renderer.ReactTestRenderer;

    beforeAll(() => {
      (window as any).getCkyConsent = jest.fn();
    });

    afterAll(() => {
      delete (window as any).getCkyConsent;
    });

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('renders button', () => {
      act(() => {
        component = renderer.create(
          <ManageCookiesLink />
        );
      });
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders button with content and correct class', () => {
      act(() => {
        component = renderer.create(
          <ManageCookiesLink>some content</ManageCookiesLink>
        );
      });
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders button in wrapper', () => {
      act(() => {
        component = renderer.create(
          <ManageCookiesLink wrapper={button => <div>{button}</div>} />
        );
      });
      expect(component.toJSON()).toMatchSnapshot();
    });

    it('calls additional callback', () => {
      const onClick = jest.fn();
      act(() => {
        component = renderer.create(
          <ManageCookiesLink onClick={onClick} />
        );
      });

      component.root.findByType('button').props.onClick();
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe('focus restoration', () => {
    let mockObserve: jest.Mock;
    let mockDisconnect: jest.Mock;
    let observerCallback: MutationCallback;
    let modalElement: HTMLDivElement;

    beforeAll(() => {
      (window as any).getCkyConsent = jest.fn();
    });

    afterAll(() => {
      delete (window as any).getCkyConsent;
    });

    beforeEach(() => {
      jest.useFakeTimers();
      jest.clearAllMocks();

      // Create mock modal element
      modalElement = document.createElement('div');
      modalElement.className = 'cky-modal';
      document.body.appendChild(modalElement);

      // Mock MutationObserver
      mockObserve = jest.fn();
      mockDisconnect = jest.fn();

      (global as any).MutationObserver = jest.fn((callback: MutationCallback) => {
        observerCallback = callback;
        return {
          observe: mockObserve,
          disconnect: mockDisconnect,
          takeRecords: jest.fn(),
        };
      });
    });

    afterEach(() => {
      jest.useRealTimers();
      if (document.body.contains(modalElement)) {
        document.body.removeChild(modalElement);
      }
      cleanup();
    });

    it('restores focus to button when cky-modal-open class is removed', () => {
      const { container } = render(<ManageCookiesLink />);
      const button = container.querySelector('button') as HTMLButtonElement;
      const focusSpy = jest.spyOn(button, 'focus');

      // Click the button
      button.click();

      // Advance timers to trigger setTimeout
      jest.advanceTimersByTime(100);

      // Verify observer was created and started observing
      expect(mockObserve).toHaveBeenCalledWith(modalElement, {
        attributes: true,
        attributeFilter: ['class']
      });

      // Simulate modal opening (add class)
      modalElement.classList.add('cky-modal-open');

      // Simulate modal closing (remove class)
      modalElement.classList.remove('cky-modal-open');
      observerCallback([{
        type: 'attributes',
        attributeName: 'class',
        target: modalElement,
        oldValue: 'cky-modal cky-modal-open',
      } as unknown as MutationRecord], {} as MutationObserver);

      // Verify focus was restored
      expect(focusSpy).toHaveBeenCalled();

      // Verify observer was disconnected
      expect(mockDisconnect).toHaveBeenCalled();

      focusSpy.mockRestore();
    });

    it('disconnects observer on component unmount', () => {
      const { container, unmount } = render(<ManageCookiesLink />);
      const button = container.querySelector('button') as HTMLButtonElement;

      // Click the button to create observer
      button.click();

      // Advance timers
      jest.advanceTimersByTime(100);

      // Verify observer was created
      expect(mockObserve).toHaveBeenCalled();

      // Unmount component
      unmount();

      // Verify observer was disconnected
      expect(mockDisconnect).toHaveBeenCalled();
    });

    it('clears timeout on component unmount before setTimeout fires', () => {
      const { container, unmount } = render(<ManageCookiesLink />);
      const button = container.querySelector('button') as HTMLButtonElement;

      // Click the button
      button.click();

      // Unmount before setTimeout fires (before 100ms)
      unmount();

      // Advance timers
      jest.advanceTimersByTime(100);

      // Verify observer was never created (because timeout was cleared)
      expect(mockObserve).not.toHaveBeenCalled();
    });

    it('disconnects observer after 10 second safety timeout', () => {
      const { container } = render(<ManageCookiesLink />);
      const button = container.querySelector('button') as HTMLButtonElement;

      // Click the button
      button.click();

      // Advance timers to create observer
      jest.advanceTimersByTime(100);

      // Verify observer was created
      expect(mockObserve).toHaveBeenCalled();

      // Clear the mock to verify it's called again by safety timeout
      mockDisconnect.mockClear();

      // Advance timers to trigger 10 second safety timeout (without modal closing)
      jest.advanceTimersByTime(10000);

      // Verify observer was disconnected by safety timeout
      expect(mockDisconnect).toHaveBeenCalled();
    });

    it('clears safety timeout when modal closes normally', () => {
      const { container } = render(<ManageCookiesLink />);
      const button = container.querySelector('button') as HTMLButtonElement;

      // Click the button
      button.click();

      // Advance timers to create observer
      jest.advanceTimersByTime(100);

      // Add then remove the class (normal modal close)
      modalElement.classList.add('cky-modal-open');
      modalElement.classList.remove('cky-modal-open');
      observerCallback([{
        type: 'attributes',
        attributeName: 'class',
        target: modalElement,
        oldValue: 'cky-modal cky-modal-open',
      } as unknown as MutationRecord], {} as MutationObserver);

      // Clear disconnect mock
      mockDisconnect.mockClear();

      // Advance past safety timeout
      jest.advanceTimersByTime(10000);

      // Verify disconnect was NOT called again (safety timeout was cleared)
      expect(mockDisconnect).not.toHaveBeenCalled();
    });
  });
});
