<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Gg';
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
  viewBox="-18 -12 36 24"
>
  <rect x="-18" y="-12" width="36" height="24" fill="white" />
  <path d="M 0,-12 v 24 M -18,0 h 36" stroke="#e8112d" stroke-width="6" fill="none" />
  <path id="arm" d="M -9,2 l 1,-1 h 9 v -2 h -9 l -1,-1 z" fill="#f9dd16" />
  <use xlink:href="#arm" transform="rotate(90)" />
  <use xlink:href="#arm" transform="rotate(-90)" />
  <use xlink:href="#arm" transform="rotate(180)" />
</svg>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Gg';
-->
