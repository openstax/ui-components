import { render } from "@testing-library/react";
import { Tabs, Tab, TabList, TabPanel } from "./Tabs";
import { palette } from "../theme/palette";

describe("Tabs component", () => {
  describe("normal styling", () => {
    it("renders", () => {
      const { asFragment } = render(
        <Tabs>
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
      expect(asFragment()).toMatchSnapshot();
    });

    it("renders small size", () => {
      const { asFragment } = render(
        <Tabs size="small">
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
      expect(asFragment()).toMatchSnapshot();
    });

    it("renders large size", () => {
      const { asFragment } = render(
        <Tabs size="large">
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
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("button-bar styling", () => {
    it("renders", () => {
      const { asFragment } = render(
        <Tabs variant="button-bar">
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
      expect(asFragment()).toMatchSnapshot();
    });

    it("renders small size", () => {
      const { asFragment } = render(
        <Tabs size="small" variant="button-bar">
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
      expect(asFragment()).toMatchSnapshot();
    });

    it("renders large size", () => {
      const { asFragment } = render(
        <Tabs size="large" variant="button-bar">
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
      expect(asFragment()).toMatchSnapshot();
    });
  });
  describe("caller className and style", () => {
    const tabs = (props: Partial<React.ComponentProps<typeof Tabs>>) => render(
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
