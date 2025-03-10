import { ToggleButtonGroup } from './ToggleButtonGroup/index';
import renderer from 'react-test-renderer';

describe('ToggleButtonGroup', () => {

    const childrenListWithKeys = [
        {id: 'red', value: 'Red'},
        {id: 'green', value: 'Green'},
        {id: 'blue', value: 'Blue'},
        {id: 'yellow', value: 'Yellow'},
        {id: 'orange', value: 'Orange'},
    ];

    it.each`
        selectionMode 
        ${'multiple'}
        ${'single'}
    `(`matches snapshot with selectionMode #selectionMode`, ({selectionMode}) => {
        const tree = renderer.create(
            <ToggleButtonGroup 
                selectionMode={selectionMode}
                selectedItems={new Set(['red'])}
            >
                {childrenListWithKeys}
            </ToggleButtonGroup>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
