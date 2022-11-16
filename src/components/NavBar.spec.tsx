import NavBar, { NavBarWithLogo } from './NavBar';
import renderer from 'react-test-renderer';

describe('NavBar', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <NavBar>NavBar content</NavBar>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('sets the maxWidth', () => {
    const tree = renderer.create(
      <NavBar maxWidth={128}>NavBar content</NavBar>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('NavBarWithLogo', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <NavBarWithLogo alt='Logo'>NavBar content</NavBarWithLogo>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('links the logo', () => {
    const tree = renderer.create(
      <NavBarWithLogo alt='Logo' href='/'>NavBar content</NavBarWithLogo>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
