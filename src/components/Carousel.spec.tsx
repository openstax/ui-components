import { Carousel } from './Carousel/index';
import renderer from 'react-test-renderer';

describe('Carousel', () => {

    const childrenListWithKeys = [
        <button key='1'>Slide 1</button>,
        <button key='2'>Slide 2</button>,
        <button key='3'>Slide 3</button>,
        <button key='4'>Slide 4</button>,
        <button key='5'>Slide 5</button>,
    ];

    it('matches snapshot', () => {
        const tree = renderer.create(
            <Carousel>{childrenListWithKeys}</Carousel>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
