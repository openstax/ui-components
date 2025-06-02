import { render } from "@testing-library/react";
import { Tree, TreeChevron, TreeItem, TreeItemContent } from './Tree';
import { Checkbox } from '../Checkbox/Checkbox';

describe('Tree', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(
      <Tree>
        <TreeItem id="1" textValue="1">
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
          <TreeItem id="2" textValue="2">
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
            <TreeItem id="3" textValue="3">
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
    )
    expect(asFragment()).toMatchSnapshot();
  });
});
