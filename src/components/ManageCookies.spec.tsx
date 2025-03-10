/* eslint-disable @typescript-eslint/no-explicit-any */
import renderer, { act } from 'react-test-renderer';
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
});
