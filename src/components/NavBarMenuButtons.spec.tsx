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
import type { CSSPropertiesWithVariables } from "../types";

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

  it("merges a render-callback style", () => {
    render(
      <Menu aria-label="Test menu">
        <NavBarMenuItem style={() => ({ color: "rgb(255, 0, 0)" })}>
          Menu item
        </NavBarMenuItem>
      </Menu>,
    );

    // The component no longer sets --navbar-menu-item-* inline; those are defaults in
    // NavBarMenuButtons.css, guarded by src/theme/tokens.spec.ts. What matters here is
    // that a render-callback style still reaches the element rather than being dropped.
    const item = document.querySelector(".navbar-menu-item") as HTMLElement;
    expect(item.style.color).toBe("rgb(255, 0, 0)");
  });

  it("lets a render-callback style override the wrapper variables", () => {
    render(
      <Menu aria-label="Test menu">
        <NavBarMenuItem
          style={() => ({ "--navbar-menu-item-hover-bg": "rebeccapurple" }) as CSSPropertiesWithVariables}
        >
          Menu item
        </NavBarMenuItem>
      </Menu>,
    );

    const item = document.querySelector(".navbar-menu-item") as HTMLElement;
    expect(item.style.getPropertyValue("--navbar-menu-item-hover-bg")).toBe("rebeccapurple");
  });

  it("keeps merging an object style, caller last", () => {
    render(
      <Menu aria-label="Test menu">
        <NavBarMenuItem
          style={{ color: "rgb(0, 0, 255)", "--navbar-menu-item-hover-bg": "rebeccapurple" } as CSSPropertiesWithVariables}
        >
          Menu item
        </NavBarMenuItem>
      </Menu>,
    );

    const item = document.querySelector(".navbar-menu-item") as HTMLElement;
    expect(item.style.color).toBe("rgb(0, 0, 255)");
    expect(item.style.getPropertyValue("--navbar-menu-item-hover-bg")).toBe("rebeccapurple");
  });
});

describe("NavBarPopover", () => {
  const renderPopover = (popoverProps: React.ComponentProps<typeof NavBarPopover>) => {
    render(
      <DialogTrigger defaultOpen>
        <NavBarButton label="Test menu" />
        <NavBarPopover {...popoverProps}>
          <Dialog aria-label="Test dialog">Popover content</Dialog>
        </NavBarPopover>
      </DialogTrigger>,
    );

    return document.querySelector(".navbar-popover") as HTMLElement;
  };

  it("composes a render-callback className", () => {
    const popover = renderPopover({ className: () => "caller-popover" });

    expect(popover.className).toContain("navbar-popover");
    expect(popover.className).toContain("caller-popover");
  });

  it("keeps composing a string className", () => {
    const popover = renderPopover({ className: "caller-popover" });

    expect(popover.className).toContain("navbar-popover");
    expect(popover.className).toContain("caller-popover");
  });

  it("merges a render-callback style", () => {
    const popover = renderPopover({ style: () => ({ color: "rgb(255, 0, 0)" }) });

    // See the note in NavBarMenuItem: --navbar-popover-border-color is a CSS default now.
    expect(popover.style.color).toBe("rgb(255, 0, 0)");
  });

  it("lets a render-callback style override the wrapper variables", () => {
    const popover = renderPopover({
      style: () => ({ "--navbar-popover-border-color": "rebeccapurple" }) as CSSPropertiesWithVariables,
    });

    expect(popover.style.getPropertyValue("--navbar-popover-border-color")).toBe("rebeccapurple");
  });

  it("keeps merging an object style, caller last", () => {
    const popover = renderPopover({
      style: { color: "rgb(0, 0, 255)", "--navbar-popover-border-color": "rebeccapurple" } as CSSPropertiesWithVariables,
    });

    expect(popover.style.color).toBe("rgb(0, 0, 255)");
    expect(popover.style.getPropertyValue("--navbar-popover-border-color")).toBe("rebeccapurple");
  });
});
