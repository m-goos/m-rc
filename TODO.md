# Next steps for this website

This is the place to collect all TODOs. As a reminder to myself: Before I pick something up, have a look at:

- Priority
- Scope vs available time

## TODO

- [ ] smoke test the deployed site (the current Playwright tests run in CI
      against the build, before the deploy — nothing checks production after)
- [ ] TypeScript 7 and ESLint 10 — both attempted and reverted, both blocked
      upstream rather than by anything here:
  - TypeScript is held at 6.x. TS 7 has no programmatic API until 7.1, so
    typescript-eslint refuses to load against it. Microsoft's documented
    workaround (alias `typescript` to `@typescript/typescript6` and install TS 7
    as `@typescript/native`) type-checks fine, but `next build` rejects the
    alias: it wants a real `typescript` package. Revisit at TS 7.1.
  - ESLint is held at 9.x. `eslint-config-next/parser` is Next's own vendored
    Babel parser, whose bundled scope manager predates ESLint 10's API, so
    linting dies with `scopeManager.addGlobals is not a function`. It is inside
    `next`, so no bump or override reaches it: https://github.com/vercel/next.js/issues/89764
    (eslint-plugin-react is a second, shimmable blocker: jsx-eslint/eslint-plugin-react#3977)
- [ ] BLOGS:
  - [ ] Improve blog preview list with reading time
  - [ ] Improve blogs with date, author, tags
- [ ] draft-status for blogs and a button to show/hide them
- [ ] client-side search
- [ ] mailing list: signup + alerting
