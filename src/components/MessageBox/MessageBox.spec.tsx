import { createRef } from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BoxBody, BoxEventId, BoxHeading, BoxWrapper, MessageBox } from './MessageBox';

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
      <MessageBox customMargin='10rem 0 10rem 0'>Body text</MessageBox>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('binds customMargin to --message-box-margin', () => {
    render(<MessageBox customMargin='10rem 0' />);

    expect(document.querySelector('.message-box')?.getAttribute('style'))
      .toContain('--message-box-margin: 10rem 0');
  });

  it('leaves --message-box-margin unset without the prop, so the CSS default applies', () => {
    render(<MessageBox />);

    expect(document.querySelector('.message-box')?.getAttribute('style')).toBeNull();
  });

  // The styled intrinsics these replaced forwarded refs, and this package is on React 17,
  // where a plain function component silently drops one.
  it.each([
    ['BoxWrapper', BoxWrapper, 'DIV'],
    ['BoxHeading', BoxHeading, 'H3'],
    ['BoxBody', BoxBody, 'DIV'],
    ['BoxEventId', BoxEventId, 'DIV'],
  ] as const)('forwards a ref from %s to its element', (_name, Component, tagName) => {
    const ref = createRef<HTMLElement>();

    render(<Component ref={ref as never} />);

    expect(ref.current?.tagName).toEqual(tagName);
  });
});
