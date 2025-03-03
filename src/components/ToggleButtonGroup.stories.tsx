import React from "react";
import { ToggleButtonGroup } from "./ToggleButtonGroup/index";
import type { Key } from "react-aria-components";

const childrenListWithKeys = [
  { key: 'red', value: 'Red' },
  { key: 'green', value: 'Green' },
  { key: 'blue', value: 'Blue' },
  { key: 'yellow', value: 'Yellow' },
  { key: 'orange', value: 'Orange' },
];

export const MultipleSelection = () => {
  const [selectedItems, setSelectedItems] = React.useState(new Set<Key>([]));
  return (
    <>
      <ToggleButtonGroup
        selectionMode='multiple'
        selectedItems={selectedItems}
        onSelectionChange={setSelectedItems}
      >
        {childrenListWithKeys}
      </ToggleButtonGroup>
      <p>Current selections: {[...selectedItems].join(', ')}</p>
    </>
  );
};

export const SingleSelection = () => {
  const [selectedItems, setSelectedItems] = React.useState(new Set<Key>([]));
  return (
    <>
      <ToggleButtonGroup
        selectedItems={selectedItems}
        onSelectionChange={setSelectedItems}
      >
        {childrenListWithKeys}
      </ToggleButtonGroup>
      <p>Current selections: {[...selectedItems].join(', ')}</p>
    </>
  );
};
