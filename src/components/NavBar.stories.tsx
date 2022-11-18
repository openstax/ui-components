import NavBar from "./NavBar";

export const Plain = () => <NavBar>NavBar</NavBar>;
export const LogoAndChildren = () => <NavBar logo>Menu</NavBar>;
export const LinkedLogo = () => <NavBar logo={{alt: 'custom alt', href: '/'}} />;
export const OverrideJustifyContent = () => <NavBar justifyContent='center'>
  <strong>Centered Menu</strong>
</NavBar>;
