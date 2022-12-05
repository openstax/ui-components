import { Loader } from './Loader';

export const Default = () => <Loader />;
export const Large = () => <Loader large={true} />;
export const Delay = () => <Loader delay={1000} />;
