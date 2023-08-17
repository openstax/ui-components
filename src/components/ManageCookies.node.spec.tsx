/** @jest-environment node */
/** eslint-disable @typescript-eslint/no-explicit-any */
import renderer from 'react-test-renderer';
import { ManageCookiesLink } from "./ManageCookies";

describe('ManageCookies outside a browser', () => {
  it('renders nothing', () => {
    const tree = renderer.create(
      <ManageCookiesLink />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
