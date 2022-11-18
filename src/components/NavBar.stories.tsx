import NavBar from "./NavBar";

export const PlainNavBar = () => <NavBar>NavBar</NavBar>
export const NavBarLogoAndChildren = () => <NavBar logo>Menu</NavBar>
export const NavBarLinkedLogo = () => <NavBar logo={{alt: 'custom alt', href: '/'}} />
