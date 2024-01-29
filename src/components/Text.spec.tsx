import { Paragraph, H2, H3, H4 } from './Text';
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
      <>
        <H2>This is an h2</H2>
        <H3>This is an h3</H3>
        <H4>This is an h4</H4>
      </>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
