import { Toast } from './Toast';

export const Default = () => <Toast title='Title'>Toast message</Toast>;
export const Success = () => <Toast title='Title' variant='success'>Toast success message</Toast>;
export const Failure = () => <Toast title='Title' variant='failure'>Toast failure message</Toast>;
