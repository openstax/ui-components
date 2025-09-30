import { MessageBox } from './MessageBox';

export const Empty = () => <MessageBox />;
export const CustomText = () => <MessageBox>
  Diffferent body text
</MessageBox>;
export const CustomMargin = () => <MessageBox margin='2rem 2rem 2rem 0'>
  Diffferent margin
</MessageBox>;
