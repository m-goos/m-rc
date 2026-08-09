import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier/flat';

/**
 * Flat config, required since ESLint 9 — eslint-config-next 16 no longer
 * supports the old .eslintrc format, and `next lint` was removed in Next 16,
 * so `pnpm run lint` calls the ESLint CLI directly.
 */
const config = [
  {
    // `next lint` only ever looked at app code; the CLI lints everything, so
    // build output and vendored Terraform modules are excluded explicitly
    ignores: [
      '.next/**',
      'out/**',
      'public/**',
      'infrastructure/**',
      'test-results/**',
      'playwright-report/**',
    ],
  },
  ...nextCoreWebVitals,
  // keep prettier last so it wins over stylistic rules from the configs above
  prettier,
  {
    rules: {
      'no-unused-vars': 'error',
    },
  },
];

export default config;
