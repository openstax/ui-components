import React from "react";
import styled from "styled-components";
import { Checkbox } from "./Checkbox";
import { Tabs, Tab, TabList, TabPanel } from "./Tabs";

const StyledTabPanel = styled(TabPanel)`
  margin: 1rem 0;
  padding: 5rem;
  display: flex;
  align-items: center;
  border: 0.1rem solid #d5d5d5;
`;

const Wrapper = styled.div`
  padding: 2.4rem;
`;

export const Examples = () => {
  const [size, setSize] =
    React.useState<React.ComponentProps<typeof Tabs>["size"]>("large");
  const [orientation, setOrientation] =
    React.useState<React.ComponentProps<typeof Tabs>["orientation"]>(
      "horizontal",
    );

  return (
    <Wrapper>
      <Checkbox
        checked={size === "small"}
        onChange={(e: any) => setSize(e.target.checked ? "small" : "large")}
      >
        Small
      </Checkbox>
      <Checkbox
        checked={orientation === "vertical"}
        onChange={(e: any) =>
          setOrientation(e.target.checked ? "vertical" : "horizontal")
        }
      >
        Vertical
      </Checkbox>
      <br />
      <Tabs size={size} orientation={orientation}>
        <TabList aria-label="Items">
          <Tab id="one">First Item</Tab>
          <Tab id="two">Second Item</Tab>
          <Tab id="three">Last Item</Tab>
        </TabList>
        <StyledTabPanel id="one">First Content Panel</StyledTabPanel>
        <StyledTabPanel id="two">Second Content Panel</StyledTabPanel>
        <StyledTabPanel id="three">Third Content Panel</StyledTabPanel>
      </Tabs>
      <Tabs variant="button-bar" size={size} orientation={orientation}>
        <TabList aria-label="Items">
          <Tab id="one">First Item</Tab>
          <Tab id="two">Second Item</Tab>
          <Tab id="three">Last Item</Tab>
        </TabList>
        <StyledTabPanel id="one">First Content Panel</StyledTabPanel>
        <StyledTabPanel id="two">Second Content Panel</StyledTabPanel>
        <StyledTabPanel id="three">Third Content Panel</StyledTabPanel>
      </Tabs>
    </Wrapper>
  );
};
