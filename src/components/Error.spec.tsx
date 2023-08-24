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

    const sentrySpy = jest.spyOn(Sentry, 'lastEventId');
    sentrySpy.mockReturnValue('initialEventId');

    const { getByTestId } = render(<Error heading='test' />);

    const errorElement = getByTestId('error');
    expect(errorElement.textContent).toContain('initialEventId');

    act(() => {
      sentrySpy.mockReturnValue('updatedEventId');
      jest.advanceTimersByTime(100);
    });

    expect(errorElement.textContent).toContain('updatedEventId');

    jest.restoreAllMocks();
  });
});
