import { render } from '@testing-library/react';
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
});
