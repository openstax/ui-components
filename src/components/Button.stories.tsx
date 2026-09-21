import React from 'react';
import { Button, LinkButton, ButtonLink } from './Button';
import { Input } from 'react-aria-components';

export const Primary = () => {
  const [state, setState] = React.useState('Primary');

  return (
    <>
      <Input value={state} onChange={e => setState(e.target.value)} />
      <br />
      <br />
      <Button>{state}</Button>
      <Button disabled>Disabled</Button>
      <Button isWaiting={true} waitingText="Waiting...">
        Button
      </Button>
    </>
  );
};

export const Light = () => <>
  <Button variant='light'>Light</Button>
  <Button variant='light' disabled>Disabled</Button>
  <Button variant='light' isWaiting={true} waitingText='Waiting...'>Button</Button>
</>;

export const Secondary = () => <>
  <Button variant='secondary'>Secondary</Button>
  <Button variant='secondary' disabled>Disabled</Button>
  <Button variant='secondary' isWaiting={true} waitingText='Waiting...'>Button</Button>
</>;

export const Link = () => <>
  <LinkButton href='https://openstax.org'>Primary</LinkButton>
  <LinkButton variant='secondary' href='https://openstax.org' target='_blank'>Button</LinkButton>
</>;

export const Linkish = () => <>
  <ButtonLink onClick={() => alert('hi')}>press to say hi</ButtonLink>
</>;
