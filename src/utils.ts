const setDelay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));
