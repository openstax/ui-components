import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

describe("NavBarMenuButton when open", () => {
  const renderOpenMenu = async () => {
    const user = userEvent.setup();
    render(
      <>
        <NavBarMenuButton label="Test menu">
          <NavBarMenuItem>Menu item</NavBarMenuItem>
          <NavBarMenuItem>Another menu item</NavBarMenuItem>
        </NavBarMenuButton>
        <p>Page content</p>
      </>,
    );

    const button = screen.getByRole("button", { name: "Test menu" });
    await user.click(button);
    const menu = await screen.findByRole("menu");

    return { user, button, menu };
  };

  it("does not wrap the menu in a dialog", async () => {
    const { menu } = await renderOpenMenu();

    expect(document.querySelector('[role="dialog"]')).toBeNull();
    expect(menu.closest(".navbar-popover")?.getAttribute("role")).toBeNull();
  });

  it("names the menu from its trigger", async () => {
    const { button, menu } = await renderOpenMenu();

    expect(screen.getByRole("menu", { name: "Test menu" })).toBe(menu);
    expect(menu.getAttribute("aria-labelledby")).toBe(button.id);
  });

  it("leaves the rest of the page exposed to assistive tech", async () => {
    await renderOpenMenu();

    expect(document.querySelector('[data-testid="underlay"]')).toBeNull();
    expect(screen.getByText("Page content").closest('[aria-hidden="true"]')).toBeNull();
  });

  it("closes on Escape and returns focus to the trigger", async () => {
    const { user, button } = await renderOpenMenu();

    await user.keyboard("{Escape}");

    await waitFor(() => expect(screen.queryByRole("menu")).toBeNull());
    expect(button.getAttribute("aria-expanded")).toBe("false");
    // FocusScope restores focus to the trigger on an animation frame.
    await waitFor(() => expect(document.activeElement).toBe(button));
  });

  it("closes on an outside press", async () => {
    const { user } = await renderOpenMenu();

    await user.click(screen.getByText("Page content"));

    await waitFor(() => expect(screen.queryByRole("menu")).toBeNull());
  });
});

describe("NavBarPopoverButton when open", () => {
  it("still renders its content as a dialog", async () => {
    const user = userEvent.setup();
    render(
      <NavBarPopoverButton label="Test popover">
        Popover content
      </NavBarPopoverButton>,
    );

    await user.click(screen.getByRole("button", { name: "Test popover" }));

    expect(await screen.findByRole("dialog")).toBeTruthy();
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

    const item = document.querySelector(".navbar-menu-item") as HTMLElement;
    expect(item.style.color).toBe("rgb(255, 0, 0)");
    expect(item.style.getPropertyValue("--navbar-menu-item-hover-bg")).toBeTruthy();
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
    expect(item.style.getPropertyValue("--navbar-menu-item-border-color")).toBeTruthy();
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

    expect(popover.style.color).toBe("rgb(255, 0, 0)");
    expect(popover.style.getPropertyValue("--navbar-popover-border-color")).toBeTruthy();
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
