import { Banner } from "./Banner";
import renderer from 'react-test-renderer';

describe('Banner', () => {
  it('matches snapshot (single message, no dismiss)', () => {
    const tree = renderer.create(
      <Banner messages={['This is a note']} severity='note' />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot (multiple messages, with dismiss)', () => {
    const tree = renderer.create(
      <Banner messages={['This is warning one', 'This is warning two']} severity='warning' onDismiss={() => {}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot (error, with dismiss)', () => {
    const tree = renderer.create(
      <Banner messages={['This is an error']} severity='error' onDismiss={() => {}} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});