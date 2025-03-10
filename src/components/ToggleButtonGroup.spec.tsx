import { ToggleButtonGroup } from "./ToggleButtonGroup/index";
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
      >
        {childrenListWithKeys}
      </ToggleButtonGroup>
    );
    const button = component.root.findByProps({ id: 'red' });
    button.props.onPressStart(mockEvent);
    expect(mockEvent.continuePropagation).toHaveBeenCalled();
  });
});
