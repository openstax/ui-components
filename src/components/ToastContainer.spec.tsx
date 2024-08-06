import { render, act } from '@testing-library/react';
import { ToastContainer } from './ToastContainer';
import { ToastData } from '../../src/types';

jest.useFakeTimers();

const toasts: ToastData[] = [
  { id: '1', title: 'Neutral', message: 'message' },
  { id: '2', title: 'Error', message: 'message', variant: 'failure', dismissAfterMs: 4000 },
  { id: '3', title: 'Success', message: 'message', variant: 'success', dismissAfterMs: 2000 },
];

describe('ToastContainer', () => {
  let root: HTMLElement;

  beforeEach(() => {
    root = document.createElement('main');
    root.id = 'root';
    document.body.append(root);
  });

  it('matches snapshot', () => {
    render(<ToastContainer toasts={toasts} />, { container: root });
    expect(document.body).toMatchSnapshot();
  });

  it('uses inline prop', () => {
    render(<ToastContainer toasts={toasts} inline={true} />, { container: root });
    expect(document.body).toMatchSnapshot();
  });

  it('runs callback', () => {
    const callback = jest.fn();
    render(<ToastContainer toasts={toasts.splice(0)} onDismissToast={callback} />, { container: root });
    act(() => {
      jest.advanceTimersByTime(10000);
      expect(callback).toHaveBeenCalledWith('3');
      expect(callback).toHaveBeenCalledWith('2');
    });
  });
});
