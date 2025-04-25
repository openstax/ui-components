import React from "react";
import { ToggleButtonGroup } from "./ToggleButtonGroup/index";
import type { Key } from "react-aria-components";

const childrenListWithKeys = [
  { id: 'red', value: 'Red' },
  { id: 'green', value: 'Green' },
  { id: 'blue', value: 'Blue' },
  { id: 'yellow', value: 'Yellow' },
  { id: 'orange', value: 'Orange' },
];

export const MultipleSelection = () => {
  const [selectedItems, setSelectedItems] = React.useState(new Set<Key>([]));
  return (
    <>
      <ToggleButtonGroup
        selectionMode='multiple'
        selectedItems={selectedItems}
        onSelectionChange={setSelectedItems}
        items={childrenListWithKeys}
      />
      <p>Current selections: {[...selectedItems].join(', ')}</p>
    </>
  );
};

export const SingleSelection = () => {
  const [selectedItem, setSelectedItem] = React.useState('');
  return (
    <>
      <ToggleButtonGroup
        selectedItems={new Set<Key>([selectedItem])}
        onSelectionChange={(newSet) => setSelectedItem([...newSet][0] as string)}
        items={childrenListWithKeys}
      />
      <p>Current selections: {selectedItem}</p>
    </>
  );
};
