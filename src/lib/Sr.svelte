<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Sr';
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
  viewBox="0 0 900 600"
  ><path fill="#007A33" d="M0 0h900v600H0z" /><path fill="#fff" d="M0 120h900v360H0z" /><path
    fill="#C8102E"
    d="M0 180h900v240H0z"
  /><path
    d="M450 191.459l70.534 217.082-184.661-134.164h228.254L379.466 408.541z"
    fill="#FFCD00"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Sr';
-->
