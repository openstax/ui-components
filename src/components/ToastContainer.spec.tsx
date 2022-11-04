import { ToastContainer } from './ToastContainer';
import renderer from 'react-test-renderer';
import { ToastData } from '../../src/types';

jest.useFakeTimers();

const toasts: ToastData[] = [
  { id: '1', title: 'Neutral', message: 'message' },
  { id: '2', title: 'Error', message: 'message', variant: 'failure', dismissAfterMs: 4000 },
  { id: '3', title: 'Success', message: 'message', variant: 'success', dismissAfterMs: 2000 },
];

describe('ToastContainer', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<ToastContainer toasts={toasts} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('runs callback', () => {
    const callback = jest.fn();
    renderer.create(<ToastContainer toasts={toasts.splice(0)} onDismissToast={callback} />).toJSON();
    renderer.act(() => {
      jest.advanceTimersByTime(10000);
      expect(callback).toHaveBeenCalledWith('3')
      expect(callback).toHaveBeenCalledWith('2')
    });
  });
});
