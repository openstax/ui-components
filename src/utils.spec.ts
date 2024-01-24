import { getTypeFromError } from "./utils";

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
