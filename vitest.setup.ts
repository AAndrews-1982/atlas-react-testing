// vitest.setup.ts
import '@testing-library/jest-dom/vitest';
import { afterAll, beforeAll, afterEach } from 'vitest';
import { server } from './src/mocks/mock';

// Start the mock server before all tests
beforeAll(() => {
  server.listen();
});

// Reset request handlers after each test
afterEach(() => {
  server.resetHandlers();
});

// Close the server after all tests are complete
afterAll(() => {
  server.close();
});
