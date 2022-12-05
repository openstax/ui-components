import { Button } from "./Button";

export const Primary = () => <>
  <Button>Primary</Button>
  <Button disabled>Disabled</Button>
  <Button isWaiting={true} waitingText='Waiting...'>Button</Button>
</>;

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
