import React from "react";
import { ButtonBar } from "./ButtonBar";
import "./stories.css";

type ButtonBarProps = React.ComponentProps<typeof ButtonBar>;

export const Examples = () => {
  const [size, setSize] = React.useState<ButtonBarProps["size"]>("medium");
  const [selections, setSelections] = React.useState([0, 2, null]);
  const updateSelection = (locIndex: number, selIndex: number) => {
    setSelections([
      ...selections.slice(0, locIndex),
      selIndex,
      ...selections.slice(locIndex + 1),
    ]);
  };

  const handleSetSize = (e: any) =>
    setSize(e.currentTarget.value as ButtonBarProps["size"]);

  return (
    <div className="story-padded">
      <label>
        <b>Size</b>
        <br />
        <select onChange={handleSetSize} defaultValue={size}>
          {["large", "medium", "small"].map((v) => (
            <option key={v}>{v}</option>
          ))}
        </select>
      </label>
      <br />
      <br />
      <ButtonBar size={size}>
        {["First Item", "Second Item"].map((label, i) => (
          <a
            data-selected={selections[0] === i}
            onClick={() => updateSelection(0, i)}
            key={i}
          >
            {label}
          </a>
        ))}
      </ButtonBar>
      <br />
      <br />
      <ButtonBar size={size}>
        {["First Item", "Second Item", "Third Item"].map((label, i) => (
          <a
            data-selected={selections[1] === i}
            onClick={() => updateSelection(1, i)}
            key={i}
          >
            {label}
          </a>
        ))}
      </ButtonBar>
      <br />
      <br />
      <ButtonBar size={size}>
        {[
          "First Item with a really long title",
          "Second Item",
          "Third Item",
        ].map((label, i) => (
          <a
            data-selected={selections[2] === i}
            onClick={() => updateSelection(2, i)}
            key={i}
          >
            {label}
          </a>
        ))}
      </ButtonBar>
    </div>
  );
};
