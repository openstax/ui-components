import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonNav } from './ButtonNav/index';
import { palette } from '../theme/palette';

describe('ButtonNav', () => {

  const childrenListWithKeys = [
    <button key='1'>Slide 1</button>,
    <button key='2'>Slide 2</button>,
    <button key='3'>Slide 3</button>,
    <button key='4'>Slide 4</button>,
    <button key='5'>Slide 5</button>,
  ];

  let handlePrev: jest.Mock;
  let handleNext: jest.Mock;

  beforeEach(() => {
    handlePrev = jest.fn();
    handleNext = jest.fn();
  });

  const renderNav = (props = {}) => render(
    <ButtonNav handlePrevArrow={handlePrev} handleNextArrow={handleNext} {...props}>
      {childrenListWithKeys}
    </ButtonNav>
  );

  const arrows = () => ({
    prev: screen.getByLabelText('move to previous item'),
    next: screen.getByLabelText('move to next item'),
  });

  it('wraps each child in its own group, in order', () => {
    const { container } = renderNav();

    const groups = container.querySelectorAll('.button-nav-wrapper > .button-nav-group');
    expect(Array.from(groups, (group) => group.textContent))
      .toEqual(['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5']);
  });

  it('renders the arrows either side of the children', () => {
    const { container } = renderNav();

    expect(Array.from(container.querySelectorAll('.button-nav > *'), (el) => el.className))
      .toEqual(['button-nav-arrow left-arrow', 'button-nav-wrapper', 'button-nav-arrow right-arrow']);
  });

  it('enables both arrows by default', () => {
    renderNav();
    const { prev, next } = arrows();

    expect(prev).toBeEnabled();
    expect(next).toBeEnabled();
  });

  it('disables each arrow independently', () => {
    const { rerender } = renderNav({ isPrevArrowDisabled: true });
    expect(arrows().prev).toBeDisabled();
    expect(arrows().next).toBeEnabled();

    rerender(
      <ButtonNav
        handlePrevArrow={handlePrev} handleNextArrow={handleNext} isNextArrowDisabled
      >
        {childrenListWithKeys}
      </ButtonNav>
    );
    expect(arrows().prev).toBeEnabled();
    expect(arrows().next).toBeDisabled();
  });

  it('calls the matching handler when an arrow is clicked', () => {
    renderNav();
    const { prev, next } = arrows();

    fireEvent.click(prev);
    expect(handlePrev).toHaveBeenCalledTimes(1);
    expect(handleNext).not.toHaveBeenCalled();

    fireEvent.click(next);
    expect(handleNext).toHaveBeenCalledTimes(1);
    expect(handlePrev).toHaveBeenCalledTimes(1);
  });

  it('does not call the handler for a disabled arrow', () => {
    renderNav({ isPrevArrowDisabled: true });

    fireEvent.click(arrows().prev);
    expect(handlePrev).not.toHaveBeenCalled();
  });

  it('binds the arrow hover colour from the theme', () => {
    const { container } = renderNav();

    expect((container.querySelector('.button-nav') as HTMLElement).style
      .getPropertyValue('--button-nav-arrow-hover-border-color')).toBe(palette.pale);
  });
});
