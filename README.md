# Svelte-flags

[![npm version](https://badgen.net/npm/v/svelte-flags)](https://www.npmjs.com/package/svelte-flags)
[![license](https://badgen.net/npm/license/svelte-flags)](https://github.com/shinokada/svelte-flags/blob/main/LICENSE)
[![license](https://badgen.net/npm/dm/svelte-flags)](https://github.com/shinokada/svelte-flags)

[Country-flags](https://github.com/hampusborgos/country-flags) Svelte components.

<p align="center">
<img width="500" src="https://raw.githubusercontent.com/shinokada/svelte-flags/main/static/images/flag1.png" />
</p>

## Installation

```sh
npm i -D svelte-flags
```

## Size

Use the `size` prop to change the flag sizes.

[REPL](https://svelte.dev/repl/445d2bd2211a4386b5cba3953d8f9fbd?version=3.47.0)

```html
<script>
  import { Us, Ca, Fr, De, Dk, Jp, No, Ch, Cz } from "svelte-flags";
</script>

<div>
  <Us size="200" />
  <Ca size="200" />
  <Fr size="200" />
  <De size="200" />
  <Dk size="200" />
  <Jp size="200" />
  <No size="200" />
  <Ch size="200" />
  <Cz size="200" />
</div>
```

## Tailwind CSS support

<p align="center">
<img src="https://raw.githubusercontent.com/shinokada/svelte-flags/main/static/images/flag2.png" />
</p>

[REPL](https://svelte.dev/repl/7611e8f78f3847d4bb89f7e0179ce3d9?version=3.47.0)

You can change size and other CSS using Tailwind and the `class` prop.

```html
<Us class="rounded-full bg-white h-40 w-40 ring-2 rring-gray-300 m-4" />
```

Or you can use `size` and `class` props together.

```html
Tailwind CSS
<Us class="rounded-full bg-white h-40 w-40 ring-2 ring-gray-300 m-4" />
Tailwind CSS + Size
<Ca class="rounded-full bg-white ring-2 ring-gray-300 m-4" size="150"/>
Tailwind CSS + size null
<Fr class="rounded-full bg-white w-40 ring-2 ring-gray-300 m-4" size />
```

## Svlete Icon Names

[Icon list](https://github.com/shinokada/svelte-flags/blob/main/flags.md)

## ISO 3166 Country Codes

[ISO 3166 Country Codes](https://github.com/shinokada/svelte-flags/blob/main/iso-3166-country-codes.md)


## Credit

All the credits goes to [country-flags](https://github.com/hampusborgos/country-flags)

## Other icons

- [Svelte-heros](https://github.com/shinokada/svelte-heros)
- [Svelte-lucide](https://github.com/shinokada/svelte-lucide)
- [Svlete-simples](https://github.com/shinokada/svelte-simples)
- [Svelte-feathers](https://github.com/shinokada/svelte-feathers)
