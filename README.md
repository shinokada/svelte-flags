<h1 align="center">Svelte-Flags</h1>

<p align="center">
<a href="https://svelte-flags.codewithshin.com/">Svelte-Flags</a>
</p>

<p align="center">
<a href="https://www.npmjs.com/package/svelte-flags" rel="nofollow"><img src="https://img.shields.io/npm/v/svelte-flags" alt="npm"></a>
<a href="https://twitter.com/shinokada" rel="nofollow"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow"><img src="https://img.shields.io/github/license/shinokada/svelte-flags" alt="License"></a>
<a href="https://www.npmjs.com/package/svelte-flags" rel="nofollow"><img src="https://img.shields.io/npm/dw/svelte-flags.svg" alt="npm"></a>
</p>

<p align="center">
<img src="https://raw.githubusercontent.com/shinokada/svelte-flags/main/static/images/flag3.png" />
</p>

250+ [Country-flags](https://github.com/hampusborgos/country-flags) Svelte components.

## Installation

```sh
npm i -D svelte-flags
```

## Size

Use the `size` prop to change the flag sizes.

- [REPL 1](https://svelte.dev/repl/445d2bd2211a4386b5cba3953d8f9fbd)
- [REPL 2](https://svelte.dev/repl/445d2bd2211a4386b5cba3953d8f9fbd)

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

## CSS frameworks support

<p align="center">
<img src="https://raw.githubusercontent.com/shinokada/svelte-flags/main/static/images/flag2.png" />
</p>

[REPL](https://svelte.dev/repl/7611e8f78f3847d4bb89f7e0179ce3d9)

You can change size and other CSS using the `class` prop.

Tailwind CSS example:

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
<Fr class="rounded-full bg-white w-40 ring-2 ring-gray-300 m-4" size="150" />
```

Bootstrap example:

```html
<Us class="position-absolute top-0 px-1" />
```

## Icon Names

[Icon list](https://github.com/shinokada/svelte-flags/blob/main/flags.md)

## ISO 3166 Country Codes

[ISO 3166 Country Codes](https://github.com/shinokada/svelte-flags/blob/main/iso-3166-country-codes.md)


## Credit

All the credits goes to [country-flags](https://github.com/hampusborgos/country-flags)


## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
