import { CheckboxRAC as Checkbox } from "./Checkbox/CheckboxRAC";
import { Tree, TreeChevron, TreeItem, TreeItemContent } from "./Tree";

export const Default = () => {
  return <Tree>
  <TreeItem id="1" textValue="1">
    <TreeItemContent>
      <Checkbox
        value={"1"}
        slot="selection"
        size={1.4}
      >
        First
      </Checkbox>
      <TreeChevron>Show/Hide</TreeChevron>
    </TreeItemContent>
    <TreeItem id="2" textValue="2">
      <TreeItemContent>
        <Checkbox
          value={"2"}
          slot="selection"
          size={1.4}
        >
           Second
        </Checkbox>
        <TreeChevron>Show/Hide</TreeChevron>
      </TreeItemContent>
      <TreeItem id="3" textValue="3">
        <TreeItemContent>
          <Checkbox
            value={"3"}
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
};
