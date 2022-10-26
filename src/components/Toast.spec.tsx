import { Toast } from './Toast';
import renderer from 'react-test-renderer';

describe('Toast', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <Toast title='Toast title'>Toast body</Toast>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('returns null if show is false', () => {

    jest.mock('react', () => ({
      ...jest.requireActual('react'),
      useState: jest.fn()
    }))

    const tree = renderer.create(
      <Toast title='Toast title'>Toast body</Toast>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has variants', () => {
    let tree = renderer.create(
      <Toast variant='success' title='Success title'>Toast body</Toast>
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <Toast variant='failure' title='Failure title'>Toast body</Toast>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('removing after set time', () => {
    beforeAll(() => {
      jest.useFakeTimers();
    });

    afterAll(() => {
      jest.useRealTimers();
    });

    it('works with default time', () => {
      renderer.act(() => {
        const render = renderer.create(<Toast title='title'>body</Toast>);
        expect(render.toJSON()).toMatchSnapshot();
        jest.advanceTimersByTime(10000);
        expect(render.toJSON()).toBeNull();
      });
    });

    it('works with custom time', () => {
      renderer.act(() => {
        const render = renderer.create(<Toast title='title' removeAfterMilliseconds={5000}>body</Toast>);
        expect(render.toJSON()).toMatchSnapshot();
        jest.advanceTimersByTime(5001);
        expect(render.toJSON()).toBeNull();
      });
    });
  });
});
