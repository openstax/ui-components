import NavBar, { NavBarWithLogo } from "./NavBar";

export const PlainNavBar = () => <NavBar>NavBar</NavBar>
export const NavBarLogoAndChildren = () => <NavBarWithLogo alt='Logo'>Menu</NavBarWithLogo>
export const NavBarLinkedLogo = () => <NavBarWithLogo alt='Logo' href='/' />
