<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Cw';
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
  viewBox="0 0 54 36"
>
  <rect width="54" height="36" fill="#002b7f" />
  <path d="M0,22.5H54V27H0z" fill="#f9e814" />
  <g fill="#fff" id="s">
    <g id="f">
      <g id="t">
        <path d="m12,8v4h2z" transform="rotate(18,12,8)" id="o" />
        <use xlink:href="#o" x="-24" transform="scale(-1,1)" />
      </g>
      <use xlink:href="#t" transform="rotate(72,12,12)" />
    </g>
    <use xlink:href="#t" transform="rotate(-72,12,12)" />
    <use xlink:href="#f" transform="rotate(144,12,12)" />
  </g>
  <use xlink:href="#s" x="-4" y="-4" transform="scale(0.75)" />
</svg>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Cw';
-->
