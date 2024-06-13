import { Menu, MenuItem } from "react-aria-components";
import renderer from "react-test-renderer";
import { NavBarMenuButton, NavBarPopoverButton } from "./NavBarMenuButtons";

describe("NavBarPopoverButton", () => {
  it("matches snapshot", () => {
    const tree = renderer
      .create(
        <NavBarPopoverButton label="Test menu">
          Popover content
        </NavBarPopoverButton>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("matches custom aria label snapshot", () => {
    const tree = renderer
      .create(
        <NavBarPopoverButton label="Test menu" aria-label="Custom label">
          Popover content
        </NavBarPopoverButton>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("NavBarMenuButton", () => {
  it("matches snapshot", () => {
    const tree = renderer
      .create(
        <NavBarMenuButton label="Test menu">
          <Menu>
            <MenuItem>Menu item</MenuItem>
            <MenuItem>Another menu item</MenuItem>
          </Menu>
        </NavBarMenuButton>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
