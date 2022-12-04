import renderer from 'react-test-renderer';
import Loader from './Loader';

describe('Loader', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
  });

   it('matches large snapshot', () => {
     const tree = renderer.create(<Loader large />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
