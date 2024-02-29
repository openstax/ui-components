import React from "react";
import styled from "styled-components";
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

  .react-aria-TabList {
    margin-top: 4.8rem;
  }
`;

type TabsProps = React.ComponentProps<typeof Tabs>;

export const Examples = () => {
  const [size, setSize] =
    React.useState<TabsProps["size"]>("medium");

  const handleSetSize = (e: any) => setSize(e.currentTarget.value as TabsProps['size']);

  return <Wrapper>
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
      <StyledTabPanel id="one">First Content Panel</StyledTabPanel>
      <StyledTabPanel id="two">Second Content Panel</StyledTabPanel>
      <StyledTabPanel id="three">Third Content Panel</StyledTabPanel>
    </Tabs>
    <br />
    <Tabs variant="button-bar" size={size}>
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
};
