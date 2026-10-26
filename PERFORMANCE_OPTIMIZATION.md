# Performance Optimization Notes

## Problem
The website appeared slow/blank while loading because sections were hidden with
`opacity: 0; translate` until client-side JavaScript added a `.in` class via
`IntersectionObserver`. On slow connections or client-side route changes, this
left content invisible and made the site feel slow or broken.

## Changes
- Removed the client-side `ScrollReveal` component and its usages.
- Removed `.reveal` gating from sections so content paints immediately.
- Removed reveal/motion hidden-state CSS so above/below-the-fold content is visible
  on first paint (no JavaScript dependency for visibility).
- Kept the responsive layout, typography, and existing lightweight client
  components (Header menu).

## Verification
- `npm run lint` passes.
- `npx tsc --noEmit` passes.
- Expected result: sections render immediately on load and when navigating between
  routes; no blank flashes waiting for JS.
