import { Toast } from './Toast';

export const Default = () => <Toast title='Title'>Toast message</Toast>;
export const SuccessWithTimeout = () => <Toast title='Title' variant='success' dismissAfterMs={5000}>Toast success message</Toast>;
export const FailureWithTimeout = () => <Toast title='Title' variant='failure' dismissAfterMs={5000}>Toast failure message</Toast>;
export const InlineAndPermanent = () => <Toast title='Title' inline={true}>Toast message</Toast>;
