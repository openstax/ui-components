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
});
