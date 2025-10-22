import { MessageBox } from "./MessageBox";

export const Empty = () => <MessageBox />;
export const CustomText = () => <MessageBox>
  Diffferent body text
</MessageBox>;
export const CustomMargin = () => <MessageBox customMargin='10rem auto'>
  No submissions are currently available for review.
</MessageBox>;
