<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Cl';
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
  viewBox="-4 -4 24 16"
>
  <path d="M20,12H-4V-4H20z" fill="#d52b1e" />
  <path d="M4,4H20V-4H-4z" fill="#fff" />
  <path d="M4,4H-4V-4H4z" fill="#0039a6" />
  <g id="f">
    <g id="t">
      <path d="M0,-2V0H1z" fill="#fff" transform="rotate(18,0,-2)" id="o" />
      <use xlink:href="#o" transform="scale(-1,1)" />
    </g>
    <use xlink:href="#t" transform="rotate(72)" />
  </g>
  <use xlink:href="#t" transform="rotate(-72)" />
  <use xlink:href="#f" transform="rotate(144)" />
</svg>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Cl';
-->
