<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Km';
</script>

<svg
  width={size}
  height={size}
  {...$$restProps}
  {role}
  aria-label={ariaLabel}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 500 300"
>
  <rect fill="#3A75C4" width="500" height="300" />
  <rect fill="#CE1126" width="500" height="225" />
  <rect fill="#FFF" width="500" height="150" />
  <rect fill="#FFC61E" width="500" height="75" />
  <path fill="#3D8E33" d="M0,300l250-150L0,0V300z" />
  <circle fill="#FFF" cx="85" cy="150" r="67.5" />
  <circle fill="#3D8E33" cx="115" cy="150" r="67.5" />
  <path
    id="star"
    fill="#FFF"
    d="M100.0104,89.1996l7.3594,22.5883L88.1125,97.8394h23.775l-19.2573,13.9486L100.0104,89.1996z"
  />
  <use xlink:href="#star" y="32.2083" />
  <use xlink:href="#star" y="64.4166" />
  <use xlink:href="#star" y="96.625" />
</svg>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Km';
-->
