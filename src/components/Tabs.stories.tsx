import React from "react";
import { Tabs, Tab, TabList, TabPanel } from "./Tabs";
import "./Tabs.stories.css";
import "../theme/theme.css";

type TabsProps = React.ComponentProps<typeof Tabs>;

export const Examples = () => {
  const [size, setSize] =
    React.useState<TabsProps["size"]>("medium");

  const handleSetSize = (e: any) => setSize(e.currentTarget.value as TabsProps['size']);

  return <div className="story-tabs-wrapper">
    <label>
      <b>Size</b><br/>
      <select onChange={handleSetSize} defaultValue={size}>
        {['large', 'medium', 'small'].map((v) =>
          <option key={v}>{v}</option>)}
      </select>
    </label>
    <Tabs size={size}>
      <TabList aria-label="Items">
        <Tab id="one">First Item</Tab>
        <Tab id="two">Second Item</Tab>
        <Tab id="three">Last Item</Tab>
      </TabList>
      <TabPanel className="story-tab-panel" id="one">First Content Panel</TabPanel>
      <TabPanel className="story-tab-panel" id="two">Second Content Panel</TabPanel>
      <TabPanel className="story-tab-panel" id="three">Third Content Panel</TabPanel>
    </Tabs>
    <br />
    <Tabs variant="button-bar" size={size}>
      <TabList aria-label="Items">
        <Tab id="one">First Item</Tab>
        <Tab id="two">Second Item</Tab>
        <Tab id="three">Last Item</Tab>
      </TabList>
      <TabPanel className="story-tab-panel" id="one">First Content Panel</TabPanel>
      <TabPanel className="story-tab-panel" id="two">Second Content Panel</TabPanel>
      <TabPanel className="story-tab-panel" id="three">Third Content Panel</TabPanel>
    </Tabs>
  </div>
};
