import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { TooltipGroup } from './Tooltip';

describe('Tooltip', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element) => element) as any;
  })
  it('matches snapshot', () => {
    const tree = renderer.create(
      <TooltipGroup isOpen={true} placement='right'>Tooltip content</TooltipGroup>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('hides', () => {
    const tree = renderer.create(
      <TooltipGroup isOpen={false} placement='right'>Tooltip content</TooltipGroup>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('uses icon', () => {
    const tree = renderer.create(
      <TooltipGroup isOpen={false} placement='right' icon={'icon'}>Tooltip content</TooltipGroup>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
