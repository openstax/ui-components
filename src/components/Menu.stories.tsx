import { Tab, TabList, TabPanel } from "react-aria-components";
import { colors } from "../../src/theme";
import styled from "styled-components";
import { MenuButton, MenuItem, Menu, MenuGenericContainer } from "./Menu";
import { NavBar } from "./NavBar";
import { Tabs } from "./Tabs";

const infoSvg = () => (
  <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 0.180664C2.68652 0.180664 0 2.86816 0 6.18066C0 9.49511 2.68652 12.1807 6 12.1807C9.31348 12.1807 12 9.49511 12 6.18066C12 2.86816 9.31348 0.180664 6 0.180664ZM6 2.84195C6.56119 2.84195 7.01613 3.29689 7.01613 3.85808C7.01613 4.41928 6.56119 4.87421 6 4.87421C5.43881 4.87421 4.98387 4.41928 4.98387 3.85808C4.98387 3.29689 5.43881 2.84195 6 2.84195ZM7.35484 8.98712C7.35484 9.14745 7.22485 9.27744 7.06452 9.27744H4.93548C4.77515 9.27744 4.64516 9.14745 4.64516 8.98712V8.40647C4.64516 8.24614 4.77515 8.11615 4.93548 8.11615H5.22581V6.56776H4.93548C4.77515 6.56776 4.64516 6.43777 4.64516 6.27744V5.69679C4.64516 5.53646 4.77515 5.40647 4.93548 5.40647H6.48387C6.6442 5.40647 6.77419 5.53646 6.77419 5.69679V8.11615H7.06452C7.22485 8.11615 7.35484 8.24614 7.35484 8.40647V8.98712Z" fill="#959595"/>
  </svg>
);

const dotsBase64 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K";

const InfoMenuButton = styled(MenuButton)`
  &:hover {
    svg path {
      fill: ${colors.palette.lightBlue};
    }
  }
`;

const DotsMenuButton = styled(MenuButton)`
  padding: 1rem;
`;

const StyledMenuItem = styled(MenuItem)`
  color: ${colors.palette.orange};
`;

const StyledWrapper = styled.div`
  display: flex;
  height: 100%
`;

export const Default = () =>
  <NavBar>
    <MenuButton label="Menu">
      <MenuGenericContainer>
        <button>Example button</button>
        <button>Another button</button>
      </MenuGenericContainer>
    </MenuButton>
    <InfoMenuButton label="Test menu" icon={infoSvg}>
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
      <MenuButton label="Help">
        <Menu>
          <MenuItem>Open Guide</MenuItem>
          <MenuItem>Contact Support</MenuItem>
        </Menu>
      </MenuButton>
      <DotsMenuButton label="Test menu" icon={dotsBase64}>
        <Menu>
          <MenuItem>Cool menu item</MenuItem>
          <MenuItem>Really long menu item with a lot of text</MenuItem>
          <StyledMenuItem>Styled menu item</StyledMenuItem>
        </Menu>
      </DotsMenuButton>
    </StyledWrapper>
  </NavBar>
