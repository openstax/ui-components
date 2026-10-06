import { fireEvent, render, screen } from "@testing-library/react";
import { Tabs, Tab, TabList, TabPanel } from "./Tabs";
import { palette } from "../theme/palette";
import type { ComponentProps } from "react";

describe("Tabs component", () => {
  const renderTabs = (props: Partial<ComponentProps<typeof Tabs>> = {}) => render(
    <Tabs {...props}>
      <TabList aria-label="Items">
        <Tab id="one">First Item</Tab>
        <Tab id="two">Second Item</Tab>
        <Tab id="three">Last Item</Tab>
      </TabList>
      <TabPanel id="one">First Content Panel</TabPanel>
      <TabPanel id="two">Second Content Panel</TabPanel>
      <TabPanel id="three">Third Content Panel</TabPanel>
    </Tabs>,
  );

  describe("variants and sizes", () => {
    it.each([
      [undefined, undefined, "tabs tabs-medium"],
      [undefined, "small", "tabs tabs-small"],
      [undefined, "large", "tabs tabs-large"],
      ["button-bar", undefined, "tabs tabs-button-bar tabs-medium"],
      ["button-bar", "small", "tabs tabs-button-bar tabs-small"],
      ["button-bar", "large", "tabs tabs-button-bar tabs-large"],
    ] as const)("classes the root for variant %s and size %s", (variant, size, expected) => {
      const { container } = renderTabs({ variant, size });

      expect((container.querySelector("[data-orientation]") as HTMLElement).className).toBe(expected);
    });
  });

  describe("tab list and panels", () => {
    it("exposes a named tab list with the first tab selected and its panel shown", () => {
      renderTabs();

      expect(screen.getByRole("tablist", { name: "Items" })).toBeTruthy();
      expect(screen.getAllByRole("tab").map((tab) => tab.textContent))
        .toEqual(["First Item", "Second Item", "Last Item"]);
      expect(screen.getByRole("tab", { name: "First Item" }).getAttribute("aria-selected")).toBe("true");
      expect(screen.getByRole("tabpanel").textContent).toBe("First Content Panel");
    });

    it("shows another tab's panel when that tab is activated", () => {
      renderTabs();

      fireEvent.click(screen.getByRole("tab", { name: "Second Item" }));

      expect(screen.getByRole("tab", { name: "Second Item" }).getAttribute("aria-selected")).toBe("true");
      expect(screen.getByRole("tab", { name: "First Item" }).getAttribute("aria-selected")).toBe("false");
      expect(screen.getByRole("tabpanel").textContent).toBe("Second Content Panel");
    });
  });

  describe("caller className and style", () => {
    const tabs = (props: Partial<ComponentProps<typeof Tabs>>) => render(
      <Tabs {...props}>
        <TabList aria-label="Items">
          <Tab id="one">First Item</Tab>
        </TabList>
        <TabPanel id="one">First Content Panel</TabPanel>
      </Tabs>,
    );

    it("merges a static className and style with the variant classes and css variables", () => {
      const { container } = tabs({ className: "custom", style: { color: "red" } });
      const el = container.querySelector('[data-orientation]') as HTMLElement;

      expect(el.classList.contains("tabs")).toBe(true);
      expect(el.classList.contains("tabs-medium")).toBe(true);
      expect(el.classList.contains("custom")).toBe(true);
      expect(el.style.color).toBe("red");
      expect(el.style.getPropertyValue("--tabs-border-color")).toBe(palette.pale);
    });

    // No `as CSSPropertiesWithVariables` cast below: the point of these is that the
    // exported prop type accepts custom properties directly.
    it("lets a caller override a documented css variable without a cast", () => {
      const { container } = tabs({ style: { "--tabs-border-color": "hotpink" } });
      const el = container.querySelector('[data-orientation]') as HTMLElement;

      expect(el.style.getPropertyValue("--tabs-border-color")).toBe("hotpink");
      // the variables the caller did not override are still bound
      expect(el.style.getPropertyValue("--tabs-active-border-color")).toBe(palette.darkGreen);
    });

    it("lets a style render callback return css variables without a cast", () => {
      const { container } = tabs({
        style: ({ orientation }) => ({
          "--tabs-border-color": orientation === "horizontal" ? "hotpink" : "rebeccapurple",
        }),
      });
      const el = container.querySelector('[data-orientation]') as HTMLElement;

      expect(el.style.getPropertyValue("--tabs-border-color")).toBe("hotpink");
    });

    it("supports render callbacks for className and style", () => {
      const { container } = tabs({
        className: ({ orientation }) => `custom-${orientation}`,
        style: ({ orientation }) => ({ color: orientation === "horizontal" ? "red" : "blue" }),
      });
      const el = container.querySelector('[data-orientation]') as HTMLElement;

      expect(el.classList.contains("tabs")).toBe(true);
      expect(el.classList.contains("custom-horizontal")).toBe(true);
      expect(el.style.color).toBe("red");
      expect(el.style.getPropertyValue("--tabs-active-border-color")).toBe(palette.darkGreen);
    });
  });
});
