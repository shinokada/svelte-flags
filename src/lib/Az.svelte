<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Az';
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
  viewBox="0 0 1200 600"
  ><path fill="#3f9c35" d="M0 0h1200v600H0z" /><path fill="#ed2939" d="M0 0h1200v400H0z" /><path
    fill="#00b9e4"
    d="M0 0h1200v200H0z"
  /><circle cx="580" cy="300" r="90" fill="#fff" /><circle
    cx="600"
    cy="300"
    r="75"
    fill="#ed2939"
  /><path
    d="M680 250l9.567 26.903 25.788-12.258-12.258 25.788L730 300l-26.903 9.567 12.258 25.788-25.788-12.258L680 350l-9.567-26.903-25.788 12.258 12.258-25.788L630 300l26.903-9.567-12.258-25.788 25.788 12.258L680 250z"
    fill="#fff"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Az';
-->
