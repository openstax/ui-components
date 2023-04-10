import { Paragraph, H2 } from './Text';
import renderer from 'react-test-renderer';

describe('Text', () => {
  it('matches body snapshot', () => {
    const tree = renderer.create(
      <Paragraph>This is a paragraph</Paragraph>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches heading snapshot', () => {
    const tree = renderer.create(
      <H2>This is a heading</H2>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
