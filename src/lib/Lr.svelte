<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Lr';
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
  viewBox="0 0 209 110"
>
  <rect fill="#bf0a30" width="209" height="110" />
  <path d="M0,15H209 M0,35H209 M0,55H209 M0,75H209 M0,95H209" stroke="#fff" stroke-width="10" />
  <rect fill="#002868" width="50" height="50" />
  <g transform="translate(25,25) scale(15)">
    <g id="B">
      <polygon id="A" fill="#fff" points="0,0 0,1 .5,1" transform="translate(0,-1) rotate(18)" />
      <use xlink:href="#A" transform="scale(-1,1)" />
    </g>
    <use xlink:href="#B" transform="rotate(72)" />
    <use xlink:href="#B" transform="rotate(-72)" />
    <use xlink:href="#B" transform="rotate(144)" />
    <use xlink:href="#B" transform="rotate(-144)" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Lr';
-->
