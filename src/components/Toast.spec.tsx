import { Toast } from './Toast';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

describe('Toast', () => {
  it('matches snapshot', () => {
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

  it('runs onDismiss callback', () => {
    const callback = jest.fn();
    renderer.create(
      <Toast
        variant='success'
        title='Success title'
        onDismiss={callback}
      >
        Toast body
      </Toast>
    );

    renderer.act(() => {
      jest.advanceTimersByTime(10000);
      expect(callback).toHaveBeenCalledTimes(1);
    });
  });

  describe('automatically dismissing', () => {
     it('works with default time', () => {
      const render = renderer.create(<Toast title='title'>body</Toast>);
      expect(render.toJSON()).not.toBeNull();
      renderer.act(() => {
        jest.advanceTimersByTime(10000);
        expect(render.toJSON()).toBeNull();
      });
    });

    it('works with custom time', () => {
      const render = renderer.create(
        <Toast title='title' dismissAfterMilliseconds={5000}>body</Toast>
      );
      expect(render.toJSON()).not.toBeNull();
      renderer.act(() => {
        jest.advanceTimersByTime(5001);
        expect(render.toJSON()).toBeNull();
      });
    });

    it('does not allow values too low for animation', () => {
      const render = renderer.create(
        <Toast title='title' dismissAfterMilliseconds={100}>body</Toast>
      );
      expect(render.toJSON()).not.toBeNull();
      renderer.act(() => {
        jest.advanceTimersByTime(500);
        expect(render.toJSON()).not.toBeNull();
      });
    });

    it('is disabled when setting autoDismiss', () => {
      const render = renderer.create(
        <Toast
          variant='success'
          title='Success title'
          autoDismiss={false}
        >
          Toast body
        </Toast>
      );
      expect(render.toJSON()).not.toBeNull();
      renderer.act(() => {
        jest.advanceTimersByTime(10000);
        expect(render.toJSON()).not.toBeNull();
      });
    });
  });
});
