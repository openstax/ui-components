import { Error } from './Error';

export const Default = () => <Error />;
export const CustomText = () => <Error heading='A different heading'>
  Diffferent body text
</Error>;
