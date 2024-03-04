import { render } from "@testing-library/react";
import { Tabs, Tab, TabList, TabPanel } from "./Tabs";

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
});
