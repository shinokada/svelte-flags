<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Mm';
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
  viewBox="0 0 18 12"
>
  <rect width="18" height="6" fill="#FECB00" />
  <rect width="18" height="6" y="6" fill="#EA2839" />
  <rect width="18" height="4" y="4" fill="#34B233" />
  <g transform="translate(9,6.422)scale(4.422)">
    <polygon id="pt" points="-0.3249196962329062,0 0,-1 0.3249196962329062,0" fill="#FFF" />
    <use xlink:href="#pt" transform="rotate(-144)" />
    <use xlink:href="#pt" transform="rotate(-72)" />
    <use xlink:href="#pt" transform="rotate(72)" />
    <use xlink:href="#pt" transform="rotate(144)" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Mm';
-->
