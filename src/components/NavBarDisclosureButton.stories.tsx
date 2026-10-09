import { NavBar } from "./NavBar";
import { NavBarDisclosureButton, NavBarDisclosureItem } from "./NavBarDisclosureButton";
import { Info } from "./svgs/Info";
import "./NavBar.stories.css";
import "../theme/theme.css";

const dotsBase64 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K";

export const LinksAndActions = () => (
  <NavBar className="story-navbar">
    <strong>Activity title</strong>
    <NavBarDisclosureButton label="Help" align="end">
      <NavBarDisclosureItem href="https://openstax.org/support" target="_blank">Support center</NavBarDisclosureItem>
      <NavBarDisclosureItem href="https://openstax.org/accessibility-statement" target="_blank">
        Accessibility statement
      </NavBarDisclosureItem>
      <NavBarDisclosureItem onAction={() => window.alert("Cookie settings")}>Cookie settings</NavBarDisclosureItem>
    </NavBarDisclosureButton>
  </NavBar>
);

export const IconTrigger = () => (
  <NavBar className="story-navbar">
    <NavBarDisclosureButton icon={dotsBase64} aria-label="Resources" style={{ padding: "1rem" }}>
      <NavBarDisclosureItem href="/highlights">Access my highlights</NavBarDisclosureItem>
      <NavBarDisclosureItem href="/book">Browse the book</NavBarDisclosureItem>
    </NavBarDisclosureButton>
    <NavBarDisclosureButton icon={<Info />} aria-label="About" align="end">
      <NavBarDisclosureItem href="/about">About this page</NavBarDisclosureItem>
    </NavBarDisclosureButton>
  </NavBar>
);

export const OpenByDefault = () => (
  <NavBar className="story-navbar">
    <NavBarDisclosureButton label="Help" defaultOpen>
      <NavBarDisclosureItem href="/guide">Video guides &amp; tutorials</NavBarDisclosureItem>
      <NavBarDisclosureItem onAction={() => window.alert("Troubleshooting")}>
        Troubleshooting information
      </NavBarDisclosureItem>
    </NavBarDisclosureButton>
  </NavBar>
);
