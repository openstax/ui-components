import { createRef } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Tree, TreeChevron, TreeItem, TreeItemContent } from './Tree';
import { Checkbox } from '../Checkbox/Checkbox';

describe('Tree', () => {
  beforeAll(() => {
    global.CSS = {
      supports: () => true,
      escape: (value: string) => value,
    } as any;
  });

  const renderTree = () => render(
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
  );

  it('renders a treegrid showing only the top level while collapsed', () => {
    renderTree();

    expect(screen.getByRole('treegrid')).toBeTruthy();
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(1);
    expect(rows[0].getAttribute('aria-level')).toBe('1');
    expect(rows[0].getAttribute('aria-expanded')).toBe('false');
    expect(screen.getByRole('checkbox', { name: 'First' })).toBeTruthy();
  });

  it('exposes each row\'s level to the stylesheet for indentation', () => {
    renderTree();
    expect(screen.getAllByRole('row')[0].style.getPropertyValue('--tree-item-level')).toBe('1');

    fireEvent.click(screen.getByRole('button', { name: 'expand/collapse 1' }));

    expect(screen.getAllByRole('row')[1].style.getPropertyValue('--tree-item-level')).toBe('2');
  });

  it('names each chevron after its row', () => {
    renderTree();

    expect(screen.getByRole('button', { name: 'expand/collapse 1' })).toBeTruthy();
  });

  it('expands a row when its chevron is activated', () => {
    renderTree();

    fireEvent.click(screen.getByRole('button', { name: 'expand/collapse 1' }));

    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(2);
    expect(rows[0].getAttribute('aria-expanded')).toBe('true');
    expect(rows[1].getAttribute('aria-level')).toBe('2');
    expect(screen.getByRole('checkbox', { name: 'Second' })).toBeTruthy();
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

  // The styled RAC wrappers these replaced forwarded refs, and this package is on React
  // 17, where a plain function component silently drops one. forwardRef also erases the
  // generic, so these calls double as a check that the item type still infers.
  it('forwards refs from the tree and its items to their elements', () => {
    const treeRef = createRef<HTMLDivElement>();
    const itemRef = createRef<HTMLDivElement>();

    render(
      <Tree ref={treeRef}>
        <TreeItem id="1" textValue="1" ref={itemRef}>
          <TreeItemContent>
            <TreeChevron>Show/Hide</TreeChevron>
          </TreeItemContent>
        </TreeItem>
      </Tree>
    );

    expect(treeRef.current?.className).toContain('tree');
    expect(itemRef.current?.className).toContain('tree-item');
  });
});
