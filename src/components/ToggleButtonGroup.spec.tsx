import { createRef } from "react";
import { render } from "@testing-library/react";
import { ToggleButton, ToggleButtonGroup } from "./ToggleButtonGroup/index";
import { StyledToggleButtonGroup } from "./ToggleButtonGroup/styles";
import renderer from "react-test-renderer";

describe('ToggleButtonGroup', () => {

    const childrenListWithKeys = [
        {id: 'red', value: 'Red'},
        {id: 'green', value: 'Green'},
        {id: 'blue', value: 'Blue'},
        {id: 'yellow', value: 'Yellow'},
        {id: 'orange', value: 'Orange'},
    ];

  it("calls onPressStart and continues propagation", () => {
    const mockEvent = { continuePropagation: jest.fn() };
    const component = renderer.create(
      <ToggleButtonGroup
        selectionMode='single'
        selectedItems={new Set(['red'])}
        items={childrenListWithKeys}
      />
    );
    const button = component.root.findByProps({ id: 'red' });
    button.props.onPressStart(mockEvent);
    expect(mockEvent.continuePropagation).toHaveBeenCalled();
  });

  it.each`
        selectionMode 
        ${'multiple'}
        ${'single'}
        ${undefined}
    `(`matches snapshot with selectionMode $selectionMode`, ({selectionMode}) => {
        const tree = renderer.create(
            <ToggleButtonGroup 
                selectionMode={selectionMode}
                selectedItems={new Set(['red'])}
                items={childrenListWithKeys}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

  it("applies the toggle button classes", () => {
    render(
      <ToggleButtonGroup
        selectionMode='single'
        selectedItems={new Set(['red'])}
        items={childrenListWithKeys}
      />
    );

    expect(document.querySelector('.toggle-button-group')).not.toBeNull();
    expect(document.querySelectorAll('.toggle-button')).toHaveLength(childrenListWithKeys.length);
  });

  it("composes a caller className rather than replacing it", () => {
    // assignments wraps this component with styled(UI.ToggleButtonGroup), which supplies
    // a plain string className that has to survive.
    render(
      <ToggleButtonGroup
        className='caller-group'
        selectionMode='single'
        selectedItems={new Set(['red'])}
        items={childrenListWithKeys}
      />
    );

    const group = document.querySelector('.toggle-button-group');
    expect(group?.className).toContain('caller-group');
  });

  // The styled RAC wrappers these replaced forwarded refs, and this package is on React
  // 17, where a plain function component silently drops one.
  it("forwards a ref from the group to its element", () => {
    const ref = createRef<HTMLDivElement>();

    render(<StyledToggleButtonGroup ref={ref} />);

    expect(ref.current?.className).toContain('toggle-button-group');
  });

  it("forwards a ref from ToggleButton to the button", () => {
    const ref = createRef<HTMLButtonElement>();

    render(<ToggleButton ref={ref}>Red</ToggleButton>);

    expect(ref.current?.tagName).toEqual('BUTTON');
  });
});
