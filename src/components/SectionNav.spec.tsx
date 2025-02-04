import { SectionNav } from './SectionNav/index';
import renderer from 'react-test-renderer';

describe('SectionNav', () => {

  const childrenListWithKeys = [
    <button key='1'>Slide 1</button>,
    <button key='2'>Slide 2</button>,
    <button key='3'>Slide 3</button>,
    <button key='4'>Slide 4</button>,
    <button key='5'>Slide 5</button>,
  ];

  const handlePrev = jest.fn();
  const handleNext = jest.fn();

  it('matches snapshot', () => {
    const tree = renderer.create(
      <SectionNav
        handlePrevArrow={handlePrev}
        handleNextArrow={handleNext}
      >
        {childrenListWithKeys}
      </SectionNav>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot when arrows are disabled', () => {
    const tree = renderer.create(
      <SectionNav
        handlePrevArrow={handlePrev}
        handleNextArrow={handleNext}
        isPrevArrowDisabled
        isNextArrowDisabled
      >
        {childrenListWithKeys}
      </SectionNav>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
