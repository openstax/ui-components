import { Html } from "./Html";

export const Block = () => <Html block className="custom-class">
  This is a block of HTML
</Html>;

export const Inline = () => <Html className="custom-class">
  This is an inline HTML.
</Html>;

export const Empty = () => <Html />; // renders nothing