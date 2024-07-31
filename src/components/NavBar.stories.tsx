import { colors } from "../../src/theme";
import styled from "styled-components";
import { NavBar } from "./NavBar";
import { NavBarButton } from "./NavBarButton";
import { PopoverContainer, NavBarPopoverButton, NavBarMenuButton, NavBarMenuItem } from "./NavBarMenuButtons";
import { Info } from "./svgs/Info";
import { Tab, Tabs, TabList, TabPanel } from "./Tabs";

const dotsBase64 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K";

const InfoMenuButton = styled(NavBarPopoverButton)`
  &:hover {
    svg path {
      fill: ${colors.palette.lightBlue};
    }
  }
`;

const DotsMenuButton = styled(NavBarMenuButton)`
  padding: 1rem;
`;

const StyledNavBarMenuItem = styled(NavBarMenuItem)`
  color: ${colors.palette.orange};
`;

const StyledWrapper = styled.div`
  display: flex;
  height: 100%
`;

const StyledNavBar = styled(NavBar)`
  position: fixed;
  left: 2rem;
  top: 2rem;
  width: calc(100% - 36rem);
`;

export const Plain = () => <StyledNavBar>NavBar</StyledNavBar>;
export const LogoAndChildren = () => <StyledNavBar logo>Menu</StyledNavBar>;
export const AltTextLinkedLogo = () => <StyledNavBar logo={{alt: 'custom alt', href: '/'}} />;
export const AltTextNoLinkedLogo = () => <StyledNavBar logo={{alt: 'custom alt unlinked'}} />;
export const OverrideJustifyContent = () => <StyledNavBar justifyContent='center'>
  <strong>Centered Menu</strong>
</StyledNavBar>;

export const Controls_NavBarButton = () =>
  <StyledNavBar>
    <NavBarButton label="Help" />
    <NavBarButton label="Info" icon={<Info />} />
    <NavBarButton style={{ padding: '1rem' }} icon="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K" aria-label="Menu" />
  </StyledNavBar>

export const PopoverAndMenu = () =>
  <StyledNavBar>
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
    <StyledWrapper>
      <NavBarMenuButton label="Help">
          <NavBarMenuItem>Open Guide</NavBarMenuItem>
          <NavBarMenuItem>Contact Support</NavBarMenuItem>
      </NavBarMenuButton>
      <DotsMenuButton aria-label="Test menu" icon={dotsBase64}>
        <NavBarMenuItem>Cool menu item</NavBarMenuItem>
        <NavBarMenuItem>Really long menu item with a lot of text</NavBarMenuItem>
        <StyledNavBarMenuItem>Styled menu item</StyledNavBarMenuItem>
      </DotsMenuButton>
    </StyledWrapper>
  </StyledNavBar>;
