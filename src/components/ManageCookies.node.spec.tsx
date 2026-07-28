/** @jest-environment node */
/** eslint-disable @typescript-eslint/no-explicit-any */
import renderer from 'react-test-renderer';
import { ManageCookiesLink } from "./ManageCookies";

// For prerendering
describe('ManageCookies outside a browser', () => {
  it('renders style element for SSR', () => {
    const tree = renderer.create(
      <ManageCookiesLink />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
