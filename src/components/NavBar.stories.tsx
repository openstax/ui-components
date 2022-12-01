import NavBar from "./NavBar";

export const Plain = () => <NavBar>NavBar</NavBar>;
export const LogoAndChildren = () => <NavBar logo>Menu</NavBar>;
export const AltTextLinkedLogo = () => <NavBar logo={{alt: 'custom alt', href: '/'}} />;
export const AltTextNoLinkedLogo = () => <NavBar logo={{alt: 'custom alt unlinked'}} />;
export const OverrideJustifyContent = () => <NavBar justifyContent='center'>
  <strong>Centered Menu</strong>
</NavBar>;
