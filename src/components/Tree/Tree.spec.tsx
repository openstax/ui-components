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

  it('applies the tree classes and keeps the chevron structure', () => {
    render(
      <Tree>
        <TreeItem id="1" textValue="1">
          <TreeItemContent>
            <TreeChevron>Show/Hide</TreeChevron>
          </TreeItemContent>
        </TreeItem>
      </Tree>
    );

    expect(document.querySelector('.tree')).not.toBeNull();
    expect(document.querySelector('.tree-item')).not.toBeNull();
    // The wrapper is the div; the caller-facing className lands on the button inside it,
    // which is what the styled-components original did.
    expect(document.querySelector('.tree-chevron > button')?.getAttribute('slot')).toEqual('chevron');
  });

  it('composes a render-callback className on the tree and its items', () => {
    render(
      <Tree className={() => 'caller-tree'}>
        <TreeItem id="1" textValue="1" className={() => 'caller-item'}>
          <TreeItemContent>
            <TreeChevron className='caller-chevron'>Show/Hide</TreeChevron>
          </TreeItemContent>
        </TreeItem>
      </Tree>
    );

    expect(document.querySelector('.tree')?.className).toContain('caller-tree');
    expect(document.querySelector('.tree-item')?.className).toContain('caller-item');
    expect(document.querySelector('.tree-chevron-button')?.className).toContain('caller-chevron');
  });
});
