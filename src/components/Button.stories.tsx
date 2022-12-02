import Button from "./Button";

export const Orange = () => <>
  <Button>Default orange</Button>
  <Button disabled>Disabled</Button>
  <Button isWaiting={true} waitingText='Waiting...'>Button</Button>
</>;

export const Light = () => <>
  <Button variant='light'>Light</Button>
  <Button variant='light' disabled>Disabled</Button>
  <Button variant='light' isWaiting={true} waitingText='Waiting...'>Button</Button>
</>;

export const Gray = () => <>
  <Button variant='gray'>Gray</Button>
  <Button variant='gray' disabled>Disabled</Button>
  <Button variant='gray' isWaiting={true} waitingText='Waiting...'>Button</Button>
</>;
