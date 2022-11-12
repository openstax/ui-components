import Button from "./Button";

export const DefaultOrange = () => <>
  <Button>Default orange</Button>
  <Button disabled>Disabled</Button>
  <Button isWaiting={true} waitingText='Waiting...'>Button</Button>
</>;

export const Light = () => <>
  <Button color='light'>Light</Button>
  <Button color='light' disabled>Disabled</Button>
  <Button color='light' isWaiting={true} waitingText='Waiting...'>Button</Button>
</>;
