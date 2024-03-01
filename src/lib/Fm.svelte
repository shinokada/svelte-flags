<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Fm';
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
  viewBox="-19 -10 38 20"
>
  <rect x="-19" y="-10" width="38" height="20" fill="#75b2dd" />
  <g id="star" transform="translate(0,-6)" fill="#fff">
    <g id="c">
      <path id="t" d="M 0,-2 V 0 H 1" transform="rotate(18 0,-2)" />
      <use xlink:href="#t" transform="scale(-1,1)" />
    </g>
    <use xlink:href="#c" transform="rotate(72)" />
    <use xlink:href="#c" transform="rotate(144)" />
    <use xlink:href="#c" transform="rotate(216)" />
    <use xlink:href="#c" transform="rotate(288)" />
  </g>
  <use xlink:href="#star" transform="rotate(90)" />
  <use xlink:href="#star" transform="rotate(180)" />
  <use xlink:href="#star" transform="rotate(270)" />
</svg>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Fm';
-->
