import renderer from 'react-test-renderer';
import { MessageBox } from './MessageBox';

describe('MessageBox', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <MessageBox />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('can override text', () => {
    const tree = renderer.create(
      <MessageBox>Body text</MessageBox>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('can override margin', () => {
    const tree = renderer.create(
      <MessageBox margin='10rem 0 10rem 0'>Body text</MessageBox>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
