<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Tr';
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
  viewBox="0 0 12 8"
  ><path fill="#E30A17" d="M0 0h12v8H0z" /><circle cx="4.25" cy="4" r="2" fill="#fff" /><circle
    cx="4.75"
    cy="4"
    r="1.6"
    fill="#e30a17"
  /><path fill="#fff" d="M5.83334 4l1.80901 .58779-1.11804-1.53885v1.90212l1.11804-1.53885z" /></svg
>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Tr';
-->
