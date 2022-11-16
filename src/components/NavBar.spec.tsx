import NavBar, { NavBarWithLogo } from './NavBar';
import renderer from 'react-test-renderer';

describe('NavBar', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <NavBar>NavBar content</NavBar>
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
});
