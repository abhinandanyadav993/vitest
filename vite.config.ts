import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      reporter: ['text', 'html'],
      include: process.env.VITE_COVERAGE_INCLUDE?.split(',') ?? ['src/**/*'],
    },
  },
});
