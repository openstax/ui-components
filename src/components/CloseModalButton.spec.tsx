import renderer from 'react-test-renderer';
import { CloseModalButton } from './CloseModalButton';

describe('CloseModalButton', () => {
  it('should render with default styles', () => {
    const tree = renderer.create(<CloseModalButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with error variant styles', () => {
    const tree = renderer.create(<CloseModalButton variant="error" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with inverted-circle variant styles', () => {
    const tree = renderer.create(<CloseModalButton variant="inverted-circle" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
