export const assertNotNull = <T>(obj: T | null, message: string) => {
  if (obj !== null) { return obj; }
  throw new Error(message);
};

export const focusElement = (element?: Element | null) => {
  if (element instanceof HTMLElement) { element.focus(); }
};

export const getTypeFromError = (error: Error | PromiseRejectionEvent['reason']) => {
  if (!error) { return undefined; }
  const { TYPE, name } = error.constructor;
  return TYPE && typeof TYPE === 'string' ? TYPE : name;
};
