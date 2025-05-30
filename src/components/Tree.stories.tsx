import { Checkbox } from "./Checkbox";
import { Tree, TreeChevron, TreeItem, TreeItemContent, AriaTreeItem } from "./Tree";

export const Default = () => {
  return <Tree>
  <TreeItem as={AriaTreeItem} id="1" textValue="1">
    <TreeItemContent>
      <Checkbox
        value={"one"}
        slot="check"
        size={1.4}
      >
        First
      </Checkbox>
      <TreeChevron>Show/Hide</TreeChevron>
    </TreeItemContent>
    <TreeItem as={AriaTreeItem} id="2" textValue="2">
      <TreeItemContent>
        <Checkbox
          value={"two"}
          slot="check"
          size={1.4}
        >
           Second
        </Checkbox>
        <TreeChevron>Show/Hide</TreeChevron>
      </TreeItemContent>
      <TreeItem as={AriaTreeItem} id="3" textValue="3">
        <TreeItemContent>
          <Checkbox
            value={"third"}
            slot="check"
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
