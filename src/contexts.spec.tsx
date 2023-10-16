import React from 'react';
import { render } from '@testing-library/react';
import { ErrorContext } from './contexts';
import renderer from 'react-test-renderer';

describe('ErrorContext', () => {
  it('should throw when setError is not initialized', () => {
    // Prevent console noise from React not knowing this is intended behavior
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    const TestComponent = () => {
      const { setError } = React.useContext(ErrorContext);
      setError({ error: new Error() });
      return <span>test</span>;
    };

    expect(() => {
      renderer.create(<TestComponent />);
    }).toThrow('Expected setError to be initialized');

    consoleSpy.mockRestore();
  });

  it('should not throw when setError is initialized', () => {
    const TestComponent = () => {
      const { setError } = React.useContext(ErrorContext);
      expect(() => setError(null)).not.toThrow();
      return null;
    };

    const mockSetError = jest.fn();

    render(
      <ErrorContext.Provider value={{ error: null, setError: mockSetError }}>
        <TestComponent />
      </ErrorContext.Provider>
    );
  });
});
