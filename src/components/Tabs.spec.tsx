import { render } from "@testing-library/react";
import { Tabs, Tab, TabList, TabPanel } from "./Tabs";

describe("Tabs component", () => {
  describe("normal styling", () => {
    it("renders correctly", () => {
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

    it("renders correctly with small size", () => {
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

    it("defaults size", () => {
      const { asFragment } = render(
        <Tabs size={undefined}>
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
    it("renders correctly with button-bar variant", () => {
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

    it("renders correctly with button-bar variant and small size", () => {
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

    it("defaults size", () => {
      const { asFragment } = render(
        <Tabs size={undefined}>
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
