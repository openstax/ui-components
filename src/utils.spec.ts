import { assertNotNull, getTypeFromError } from "./utils";

describe('assertNotNull', () => {
  it('throws if its argument is null', () => {
    expect(() => assertNotNull(null, 'it is null')).toThrowError('it is null');
  });

  it('returns its argument if it is not null', () => {
    const obj = {};
    expect(assertNotNull(obj, 'it is not null')).toBe(obj);
  });
});

describe('getTypeFromError', () => {
  it('returns name if the constuctor does not contain TYPE ', () => {
    class MyError extends Error {
      constructor() {
        super();
        Object.setPrototypeOf(this, MyError.prototype);
      }
    }

    expect(getTypeFromError(new MyError())).toEqual('MyError');
  });

  it('returns undefined if the error is undefined', () => {
    expect(getTypeFromError(undefined)).toBe(undefined);
  });
});
