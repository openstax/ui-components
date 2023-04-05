import { Paragraph, Heading } from './Text';
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
      <Heading>This is a heading</Heading>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
