import { render } from "@testing-library/react";
import { Dialog, DialogTrigger, Menu, MenuItem } from "react-aria-components";
import renderer from "react-test-renderer";
import {
  NavBarMenuButton,
  NavBarMenuItem,
  NavBarPopover,
  NavBarPopoverButton,
} from "./NavBarMenuButtons";
import { NavBarButton } from "./NavBarButton";

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

describe("NavBarMenuItem", () => {
  it("composes a render-callback className", () => {
    render(
      <Menu aria-label="Test menu">
        <NavBarMenuItem className={() => "caller-item"}>Menu item</NavBarMenuItem>
      </Menu>,
    );

    const item = document.querySelector(".navbar-menu-item");
    expect(item?.className).toContain("navbar-menu-item");
    expect(item?.className).toContain("caller-item");
  });

  it("keeps composing a string className", () => {
    render(
      <Menu aria-label="Test menu">
        <NavBarMenuItem className="caller-item">Menu item</NavBarMenuItem>
      </Menu>,
    );

    const item = document.querySelector(".navbar-menu-item");
    expect(item?.className).toContain("navbar-menu-item");
    expect(item?.className).toContain("caller-item");
  });
});

describe("NavBarPopover", () => {
  it("composes a render-callback className", () => {
    render(
      <DialogTrigger defaultOpen>
        <NavBarButton label="Test menu" />
        <NavBarPopover className={() => "caller-popover"}>
          <Dialog aria-label="Test dialog">Popover content</Dialog>
        </NavBarPopover>
      </DialogTrigger>,
    );

    const popover = document.querySelector(".navbar-popover");
    expect(popover?.className).toContain("navbar-popover");
    expect(popover?.className).toContain("caller-popover");
  });

  it("keeps composing a string className", () => {
    render(
      <DialogTrigger defaultOpen>
        <NavBarButton label="Test menu" />
        <NavBarPopover className="caller-popover">
          <Dialog aria-label="Test dialog">Popover content</Dialog>
        </NavBarPopover>
      </DialogTrigger>,
    );

    const popover = document.querySelector(".navbar-popover");
    expect(popover?.className).toContain("navbar-popover");
    expect(popover?.className).toContain("caller-popover");
  });
});
