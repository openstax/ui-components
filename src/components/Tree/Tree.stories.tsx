import React from "react";
import { TreeCheckbox as Checkbox } from "./TreeCheckbox";
import { Tree, TreeChevron, TreeItem, TreeItemContent } from "./Tree";



import type { Selection } from "@react-types/shared";

export const Default = () => {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set());

  return (
    <Tree
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
      selectionMode="multiple"
    >
      <TreeItem id="one" textValue="First">
        <TreeItemContent>
          <Checkbox
            value={"one"}
            slot="selection"
            size={1.4}
          >
            First
          </Checkbox>
          <TreeChevron>Show/Hide</TreeChevron>
        </TreeItemContent>
        <TreeItem id="two" textValue="Second">
          <TreeItemContent>
            <Checkbox
              value={"two"}
              slot="selection"
              size={1.4}
            >
              Second
            </Checkbox>
            <TreeChevron>Show/Hide</TreeChevron>
          </TreeItemContent>
          <TreeItem id="three" textValue="Third">
            <TreeItemContent>
              <Checkbox
                value={"three"}
                slot="selection"
                size={1.4}
              >
                Third
              </Checkbox>
            </TreeItemContent>
          </TreeItem>
        </TreeItem>
      </TreeItem>
    </Tree>
  );
};
