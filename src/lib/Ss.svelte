<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Ss';
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
  viewBox="0 0 20 10"
  ><path fill="#078930" d="M0 0h20v10H0z" /><path fill="#fff" d="M0 0h20v7H0z" /><path
    d="M0 0h20v3H0z"
  /><path fill="#da121a" d="M0 3.5h20v3H0z" /><path fill="#0f47af" d="M0 0l8.66 5L0 10z" /><path
    d="M1.22 5l3.015.98-1.863-2.565v3.17L4.235 4.02z"
    fill="#fcdd09"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Ss';
-->
