import renderer from 'react-test-renderer';
import { NavBarButton } from './NavBarButton';
import { Info } from './svgs/Info';

describe('NavBarButton', () => {
  it('matches text snapshot', () => {
    const tree = renderer.create(
      <NavBarButton label="button" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches svg icon snapshot', () => {
    const tree = renderer.create(
      <NavBarButton icon={<Info />} aria-label="info" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches base64 icon snapshot', () => {
    const tree = renderer.create(
      <NavBarButton icon="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCAxMCA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyOCIgcj0iNSIgZmlsbD0iIzAwMCIvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSI1MSIgcj0iNSIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4K" aria-label="dots menu" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches icon and text snapshot', () => {
    const tree = renderer.create(
      <NavBarButton label="Info" icon={<Info />} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
