import renderer from 'react-test-renderer';
import { render, act } from '@testing-library/react';
import { Error } from './Error';
import * as Sentry from '@sentry/react';

// Sentry v8+ exposes its named exports as read-only getters, so they can no longer
// be replaced with jest.spyOn directly. Mock the module to make lastEventId spyable.
jest.mock('@sentry/react', () => ({
  __esModule: true,
  ...jest.requireActual('@sentry/react'),
  lastEventId: jest.fn(),
}));

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
