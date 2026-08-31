import { CloseModalButton } from './CloseModalButton';

export const Default = () => (
  <div style={{ padding: '2rem', background: '#f0f0f0' }}>
    <CloseModalButton />
  </div>
);

export const ErrorVariant = () => (
  <div style={{ padding: '2rem', background: '#f0f0f0' }}>
    <CloseModalButton variant="error" />
  </div>
);

export const InvertedCircle = () => (
  <div style={{ padding: '2rem', background: '#333' }}>
    <CloseModalButton variant="inverted-circle" />
  </div>
);
