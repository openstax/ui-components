import { Paragraph, H2, H3, Heading } from './Text';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import React from 'react';

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

describe('Heading', () => {
  it('defaults variant to match the semantic level', () => {
    const tree = renderer.create(
      <Heading level={2}>This is a heading</Heading>
    ).toJSON();
    expect(tree).toMatchObject({ type: 'h2', props: { className: 'text-h2' } });
  });

  it('renders the element for the given level', () => {
    const tree = renderer.create(
      <Heading level={4}>This is a heading</Heading>
    ).toJSON();
    expect((tree as unknown as { type: string }).type).toBe('h4');
  });

  it('decouples visual style from semantic level', () => {
    // an <h2> element styled like an h3
    const tree = renderer.create(
      <Heading level={2} variant="h3">This is a heading</Heading>
    ).toJSON();
    expect(tree).toMatchObject({ type: 'h2', props: { className: 'text-h3' } });
  });

  it('merges a consumer className with the variant class', () => {
    const tree = renderer.create(
      <Heading level={2} className="custom">This is a heading</Heading>
    ).toJSON();
    expect((tree as unknown as { props: { className: string } }).props.className).toBe('text-h2 custom');
  });

  it('forwards a ref to the underlying element', () => {
    const ref = React.createRef<HTMLHeadingElement>();
    render(<Heading level={2} ref={ref}>This is a heading</Heading>);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('H2');
  });
});
