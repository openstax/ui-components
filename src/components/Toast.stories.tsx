import { Toast } from './Toast';

export const Default = () => <Toast title='Title'>Toast message</Toast>;
export const Success = () => <Toast title='Title' variant='success' dismissAfterMilliseconds={10}>Toast success message</Toast>;
export const Failure = () => <Toast title='Title' variant='failure'>Toast failure message</Toast>;
export const InlinePermanent = () => <Toast title='Title' autoDismiss={false} inline={true}>Toast message</Toast>;
