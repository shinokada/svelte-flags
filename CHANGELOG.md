# svelte-flags

## 3.0.1

### Patch Changes

- fix: change let to const

## 3.0.0

### Major Changes

- BREAKING: Removed default aria-label from all icons. Icons are now decorative by default. Add ariaLabel prop explicitly for standalone icons that need accessible labels.
  - Added focusable prop (defaults to "false", accepts "true" | "false" | "auto")
  - Added automatic aria-labelledby support when title prop is provided
  - Fixed ariaDescribedby whitespace trimming
  - Fixed accessibility precedence: title now correctly takes precedence over ariaLabel

## 2.0.2

### Patch Changes

- fix: change svelte-5-ui-lib with flowbite-svelte

## 2.0.1

### Patch Changes

- docs: README update

## 2.0.0

### Patch Changes

- fix: remove svelte:component from Icon.svelte ([`b2cfb33`](https://github.com/shinokada/svelte-flags/commit/b2cfb339809d7697c24fa3acb55a7d4406f9bf7b))

- feat: v2 for Svelte Runes ([`a06b207`](https://github.com/shinokada/svelte-flags/commit/a06b207690fb6a0465b19f8cee19f2172ce499c8))

- fix: peerDependencies ([`080d449`](https://github.com/shinokada/svelte-flags/commit/080d4495a592a351b8b92c1348b694a59b3d7cd7))

- feat: extends SVGAttributes<SVGElement> ([`e043a00`](https://github.com/shinokada/svelte-flags/commit/e043a003972903b524b45443bb8bde1bcfb74b5b))

- types: create types.ts ([`b49b8d1`](https://github.com/shinokada/svelte-flags/commit/b49b8d1bfa8b2f83785b4fc64db76ec966ce4d0b))

## 2.0.0-next.5

### Patch Changes

- types: create types.ts ([`b49b8d1bfa8b2f83785b4fc64db76ec966ce4d0b`](https://github.com/shinokada/svelte-flags/commit/b49b8d1bfa8b2f83785b4fc64db76ec966ce4d0b))

## 2.0.0-next.4

### Patch Changes

- fix: remove svelte:component from Icon.svelte ([`b2cfb339809d7697c24fa3acb55a7d4406f9bf7b`](https://github.com/shinokada/svelte-flags/commit/b2cfb339809d7697c24fa3acb55a7d4406f9bf7b))

## 2.0.0-next.3

### Patch Changes

- fix: peerDependencies ([`080d4495a592a351b8b92c1348b694a59b3d7cd7`](https://github.com/shinokada/svelte-flags/commit/080d4495a592a351b8b92c1348b694a59b3d7cd7))

## 2.0.0-next.2

### Patch Changes

- feat: extends SVGAttributes<SVGElement> ([`e043a003972903b524b45443bb8bde1bcfb74b5b`](https://github.com/shinokada/svelte-flags/commit/e043a003972903b524b45443bb8bde1bcfb74b5b))
