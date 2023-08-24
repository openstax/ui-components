import renderer from 'react-test-renderer';
import { render, act } from '@testing-library/react';
import { Error } from './Error';
import * as Sentry from '@sentry/react';

describe('Error', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <Error />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('can override text', () => {
    const tree = renderer.create(
      <Error heading='An important heading'>Body text</Error>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('updates lastEventId when Sentry.lastEventId() changes', async () => {
    jest.useFakeTimers();

    const setIntervalSpy = jest.spyOn(global, 'setInterval');
    const sentrySpy = jest.spyOn(Sentry, 'lastEventId');
    sentrySpy.mockReturnValue(undefined);

    const { getByTestId } = render(<Error />);

    const errorElement = getByTestId('event-id');
    expect(errorElement.textContent).toBe('');
    expect(setIntervalSpy).toHaveBeenCalled();

    act(() => {
      sentrySpy.mockReturnValue('updatedEventId');
      jest.advanceTimersByTime(100);
    });

    expect(errorElement.textContent).toContain('updatedEventId');

    jest.restoreAllMocks();
  });
});
