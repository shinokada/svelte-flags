<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Cm';
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
  viewBox="0 0 90 60"
>
  <rect width="30" height="60" fill="#007a5e" />
  <rect x="30" width="30" height="60" fill="#ce1126" />
  <rect x="60" width="30" height="60" fill="#fcd116" />
  <g transform="translate(45,30)" fill="#fcd116">
    <g id="c">
      <path id="t" d="M 0,-8 v 8 h 4 z" transform="rotate(18 0,-8)" />
      <use xlink:href="#t" transform="scale(-1,1)" />
    </g>
    <use xlink:href="#c" transform="rotate(72)" />
    <use xlink:href="#c" transform="rotate(144)" />
    <use xlink:href="#c" transform="rotate(216)" />
    <use xlink:href="#c" transform="rotate(288)" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Cm';
-->
