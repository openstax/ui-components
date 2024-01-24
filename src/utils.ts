export const getTypeFromError = (error: Error | PromiseRejectionEvent['reason']) => {
  if (!error) { return undefined; }
  const { TYPE, name } = error.constructor;
  return TYPE && typeof TYPE === 'string' ? TYPE : name;
};
