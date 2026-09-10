import React from "react";
import type { CSSPropertiesWithVariables } from "../types";
import { colors } from "../theme";
import { NavBar } from "./NavBar";
import { NavBarButton } from "./NavBarButton";
import { PopoverContainer, NavBarPopoverButton, NavBarMenuButton, NavBarMenuItem } from "./NavBarMenuButtons";
import { Info } from "./svgs/Info";
import { Tab, Tabs, TabList, TabPanel } from "./Tabs";
import "./NavBar.stories.css";
import "../theme/theme.css";

const dotsBase64 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K";

const InfoMenuButton = ({ children, ...props }: React.ComponentProps<typeof NavBarPopoverButton>) => {
  return (
    <NavBarPopoverButton
      {...props}
      style={{
        '--info-icon-fill': colors.palette.lightBlue,
        ...props.style
      } as CSSPropertiesWithVariables}
      className="info-menu-button"
    >
      {children}
    </NavBarPopoverButton>
  );
};

const DotsMenuButton = (props: React.ComponentProps<typeof NavBarMenuButton>) => (
  <NavBarMenuButton {...props} style={{ padding: '1rem', ...props.style }} />
);

export const Plain = () => <NavBar className="story-navbar">NavBar</NavBar>;
export const LogoAndChildren = () => <NavBar logo className="story-navbar">Menu</NavBar>;
export const AltTextLinkedLogo = () => <NavBar logo={{alt: 'custom alt', href: '/'}} className="story-navbar" />;
export const AltTextNoLinkedLogo = () => <NavBar logo={{alt: 'custom alt unlinked'}} className="story-navbar" />;
export const OverrideJustifyContent = () => <NavBar justifyContent='center' className="story-navbar">
  <strong>Centered Menu</strong>
</NavBar>;

export const Controls_NavBarButton = () =>
  <NavBar className="story-navbar">
    <NavBarButton label="Help" />
    <NavBarButton label="Info" icon={<Info />} />
    <NavBarButton style={{ padding: '1rem' }} icon={dotsBase64} aria-label="Menu" />
  </NavBar>

export const PopoverAndMenu = () =>
  <NavBar className="story-navbar">
    <InfoMenuButton label="Menu">
      <PopoverContainer>
        <button>Example button</button>
        <button>Another button</button>
      </PopoverContainer>
    </InfoMenuButton>
    <InfoMenuButton label="Test menu" icon={<Info />}>
      <Tabs>
        <TabList aria-label="Items">
          <Tab id="one">Info 1</Tab>
          <Tab id="two">Info 2</Tab>
          <Tab id="three">Info 3</Tab>
        </TabList>
        <TabPanel id="one">First</TabPanel>
        <TabPanel id="two">Second</TabPanel>
        <TabPanel id="three">Third</TabPanel>
      </Tabs>
    </InfoMenuButton>
    <div className="story-wrapper">
      <NavBarMenuButton label="Help">
          <NavBarMenuItem>Open Guide</NavBarMenuItem>
          <NavBarMenuItem>Contact Support</NavBarMenuItem>
      </NavBarMenuButton>
      <DotsMenuButton aria-label="Test menu" icon={dotsBase64}>
        <NavBarMenuItem>Cool menu item</NavBarMenuItem>
        <NavBarMenuItem>Really long menu item with a lot of text</NavBarMenuItem>
        <NavBarMenuItem className="story-styled-menu-item">Styled menu item</NavBarMenuItem>
      </DotsMenuButton>
    </div>
  </NavBar>;
