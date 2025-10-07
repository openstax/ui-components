import React from 'react';
import { Banner } from './Banner';

export const Error = () => <Banner messages={['This is an error message']} severity='error' />;

export const Warning = () => <Banner messages={['This is a warning message']} severity='warning' />;

export const Note = () => <Banner messages={['This is a note message']} severity='note' />;

export const MultipleMessages = () => <Banner messages={['First message', 'Second message', 'Third message']} severity='warning' />;

export const Dismissible = () => {
  const [visible, setVisible] = React.useState(true);
  return visible ? <Banner messages={['This is a dismissible warning message']} severity='warning' onDismiss={() => setVisible(false)} /> : null;
};