import { ToastContainer } from './ToastContainer';
import renderer from 'react-test-renderer';
import { ToastData } from 'src/types';

jest.useFakeTimers();

const toasts: ToastData[] = [
  { title: 'Neutral', message: 'message' },
  { title: 'Error', message: 'message', variant: 'failure', removeAfterMilliseconds: 4000 },
  { title: 'Success', message: 'message', variant: 'success', removeAfterMilliseconds: 2000 },
];

describe('ToastContainer', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<ToastContainer toasts={toasts} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
