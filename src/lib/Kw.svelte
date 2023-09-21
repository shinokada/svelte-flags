<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Kw';
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
  viewBox="0 0 12 6"
>
  <rect width="12" height="2" fill="#007a3d" />
  <rect width="12" height="2" y="2" fill="#fff" />
  <rect width="12" height="2" y="4" fill="#ce1126" />
  <polygon points="0,0 3,2 3,4 0,6" />
</svg>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Kw';
-->
