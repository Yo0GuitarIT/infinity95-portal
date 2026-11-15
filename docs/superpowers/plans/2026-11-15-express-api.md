# Express API Implementation Plan

**Goal:** Replace the Astro page with a beginner-friendly Express API.

**Architecture:** Keep application code in `src/server.ts`. Listen on port 3000 and return HTTP 200 with `{ "status": "ok" }` from `GET /health`.

**Tech Stack:** Node.js >=22.12.0, TypeScript, Express 5, pnpm, tsx.

**Spec:** User-approved scope: remove Astro, create a callable Express API, and explain how it works. Start with one source file and add concepts gradually.

## Constraints and review focus

- Preserve ESM and pnpm; remove frontend dependencies, configuration and assets.
- No database, authentication or extra architecture in this first version.
- Verify development startup, compiled startup, JSON response and unknown-route 404.
- Update editor settings and formatting so no Astro tooling remains required.

## Task 1: Replace the frontend with the API

- [x] Replace package scripts/dependencies and TypeScript configuration; refresh lockfile.
- [x] Create `src/server.ts` with Express, `GET /health`, and port 3000.
- [x] Remove Astro pages, styles, configuration and favicons; update editor settings.
- [x] Write a Traditional Chinese README covering setup, requests, source explanation and build/start.
- [x] Run type checking, build, formatting and HTTP smoke checks for development and compiled execution.

## Execution notes

Proceed in the current workspace under the user's authorization. Use direct HTTP smoke checks for this minimal route rather than adding a test framework. Leave changes uncommitted for review.

Verification: `pnpm check`, `pnpm build`, Prettier check and `git diff --check` passed. Both development and compiled servers returned HTTP 200 with the expected JSON and HTTP 404 for an unknown path. Test processes were stopped.
