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

  it('has variants and inlines', () => {
    let tree = renderer.create(
      <Toast variant='success' title='Success title'>Toast body</Toast>
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <Toast variant='failure' title='Failure title'>Toast body</Toast>
    ).toJSON();
    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <Toast title='Inline' inline={true}>Toast body</Toast>
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
        dismissAfterMs={5000}
      >
        Toast body
      </Toast>
    );

    renderer.act(() => {
      jest.advanceTimersByTime(10000);
      expect(callback).toHaveBeenCalledTimes(1);
    });
  });

  it('cleans up useEffect', () => {
    const component = renderer.create(
      <Toast title='Success title'>
        Toast body
      </Toast>
    );
    expect(() => {
      renderer.act(() =>{
        component.unmount();
      });
    }).not.toThrowError();
  });

  describe('automatically dismissing', () => {
    it('works when setting value', () => {
      const render = renderer.create(
        <Toast title='title' dismissAfterMs={5000}>body</Toast>
      );
      expect(render.toJSON()).not.toBeNull();
      renderer.act(() => {
        jest.advanceTimersByTime(5001);
        expect(render.toJSON()).toBeNull();
      });
    });

    it('does not allow values too low for animation', () => {
      const render = renderer.create(
        <Toast title='title' dismissAfterMs={100}>body</Toast>
      );
      expect(render.toJSON()).not.toBeNull();
      renderer.act(() => {
        jest.advanceTimersByTime(500);
        expect(render.toJSON()).not.toBeNull();
      });
    });
  });
});
