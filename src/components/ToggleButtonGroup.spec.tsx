import { ToggleButtonGroup } from './ToggleButtonGroup/index';
import renderer from 'react-test-renderer';

describe('ToggleButtonGroup', () => {

    const childrenListWithKeys = [
        {key: 'red', value: 'Red'},
        {key: 'green', value: 'Green'},
        {key: 'blue', value: 'Blue'},
        {key: 'yellow', value: 'Yellow'},
        {key: 'orange', value: 'Orange'},
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
