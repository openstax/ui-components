import { Paragraph, H2, H3 } from './Text';
import renderer from 'react-test-renderer';

describe('Text', () => {
  it('matches body snapshot', () => {
    const tree = renderer.create(
      <Paragraph>This is a paragraph</Paragraph>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches h2 snapshot', () => {
    const tree = renderer.create(
      <H2>This is a heading</H2>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches h3 snapshot', () => {
    const tree = renderer.create(
      <H3>This is a heading</H3>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
