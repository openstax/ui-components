import Button from "./Button";

export const Orange = () => <>
  <Button>Default orange</Button>
  <Button disabled>Disabled</Button>
  <Button isWaiting={true} waitingText='Waiting...'>Button</Button>
</>;

export const Light = () => <>
  <Button color='light'>Light</Button>
  <Button color='light' disabled>Disabled</Button>
  <Button color='light' isWaiting={true} waitingText='Waiting...'>Button</Button>
</>;

export const Gray = () => <>
  <Button color='gray'>Gray</Button>
  <Button color='gray' disabled>Disabled</Button>
  <Button color='gray' isWaiting={true} waitingText='Waiting...'>Button</Button>
</>;
