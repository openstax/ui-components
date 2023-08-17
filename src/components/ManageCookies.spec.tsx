/* eslint-disable @typescript-eslint/no-explicit-any */
import renderer from 'react-test-renderer';
import { ManageCookiesLink } from "./ManageCookies";

describe('ManageCookies', () => {
  describe('without osano', () => {

    it('renders nothing', () => {
      const tree = renderer.create(
        <ManageCookiesLink />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders nothing, even a wrapper', () => {
      const tree = renderer.create(
        <ManageCookiesLink>{button => <div>{button}</div>}</ManageCookiesLink>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('with osano', () => {
    let showDrawerSpy: jest.SpyInstance;

    beforeAll(() => {
      showDrawerSpy = jest.fn();
      (window as any).Osano = {cm: {mode: 'production',
        showDrawer: showDrawerSpy}
      };
    });

    afterAll(() => {
      delete (window as any).Osano;
    });

    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('renders button', () => {
      const tree = renderer.create(
        <ManageCookiesLink />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders button in wrapper', () => {
      const tree = renderer.create(
        <ManageCookiesLink>{button => <div>{button}</div>}</ManageCookiesLink>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('calls osano showDrawer', () => {
      const component = renderer.create(
        <ManageCookiesLink />
      );

      expect(showDrawerSpy).not.toHaveBeenCalled();
      component.root.findByType('button').props.onClick();
      expect(showDrawerSpy).toHaveBeenCalled();
    });

    it('calls additional callback', () => {
      const onClick = jest.fn();
      const component = renderer.create(
        <ManageCookiesLink onClick={onClick} />
      );

      expect(showDrawerSpy).not.toHaveBeenCalled();
      component.root.findByType('button').props.onClick();
      expect(showDrawerSpy).toHaveBeenCalled();
      expect(onClick).toHaveBeenCalled();
    });
  });
});
