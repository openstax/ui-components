import { NavBar } from './NavBar';
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

describe('NavBar with a logo', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <NavBar logo={true}>NavBar content</NavBar>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('links the logo', () => {
    const tree = renderer.create(
      <NavBar logo={{alt: 'Logo', href:'/'}}>NavBar content</NavBar>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('customizes the alt text', () => {
    const tree = renderer.create(
      <NavBar logo={{alt: 'Custom alt text'}}>NavBar content</NavBar>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
