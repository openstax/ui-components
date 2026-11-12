import React from "react";
import { Heading } from "react-aria-components";
import { NavBar } from "../NavBar";
import { NavBarPopoverButton } from "../NavBarMenuButtons";
import { TextResizer } from "./TextResizer";
import { TextResizerValue, textResizerDefaultValue } from "./constants";
import "../stories.css";
import "../NavBar.stories.css";
import "../../theme/theme.css";

const useTextSize = () => React.useState<TextResizerValue>(textResizerDefaultValue);

export const Default = () => {
  const [value, setValue] = useTextSize();

  return <div className="story-padded">
    <TextResizer value={value} onChange={setValue} aria-label="Text size" />
  </div>;
};

export const FillColor = () => {
  const [value, setValue] = useTextSize();

  return <div className="story-padded">
    <TextResizer value={value} onChange={setValue} fillColor="#0064a0" aria-label="Text size" />
  </div>;
};

export const Translated = () => {
  const [value, setValue] = useTextSize();

  return <div className="story-padded">
    <TextResizer
      value={value}
      onChange={setValue}
      sliderLabel="Tamaño del texto"
      decreaseLabel="Reducir el tamaño del texto"
      increaseLabel="Aumentar el tamaño del texto"
      announcement={(size) => `Tamaño del texto ${size}`}
      aria-label="Tamaño del texto"
    />
  </div>;
};

export const InNavBarPopover = () => {
  const [value, setValue] = useTextSize();

  return <NavBar className="story-navbar">
    <NavBarPopoverButton label="Text size">
      <Heading slot="title">Text size</Heading>
      <TextResizer value={value} onChange={setValue} />
    </NavBarPopoverButton>
  </NavBar>;
};
