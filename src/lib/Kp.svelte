<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Kp';
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
  viewBox="0 0 72 36"
>
  <rect fill="#024FA2" width="72" height="36" />
  <rect fill="#fff" y="6" width="72" height="24" />
  <rect fill="#ED1C27" y="7" width="72" height="22" />
  <circle fill="#fff" cx="24" cy="18" r="8" />
  <g id="star" transform="translate(24,18) scale(7.75)" fill="#ED1C27">
    <g id="cone">
      <polygon id="triangle" points="0,0 0,1 .5,1" transform="translate(0,-1) rotate(18)" />
      <use xlink:href="#triangle" transform="scale(-1,1)" id="use12" />
    </g>
    <use xlink:href="#cone" transform="rotate(72)" id="use14" />
    <use xlink:href="#cone" transform="rotate(-72)" id="use16" />
    <use xlink:href="#cone" transform="rotate(144)" id="use18" />
    <use xlink:href="#cone" transform="rotate(-144)" id="use20" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Kp';
-->
