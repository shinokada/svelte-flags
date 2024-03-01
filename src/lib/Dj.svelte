<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Dj';
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
  viewBox="0 0 15 10"
  ><path fill="#6ab2e7" d="M0 0h15v10H0z" /><path fill="#12ad2b" d="M0 5h15v5H0z" /><path
    d="M0 0v10l4.33-2.5L8.66 5 4.33 2.5 0 0z"
    fill="#fff"
  /><path
    d="M3.314 3.75l.31.955H4.63l-.813.59.31.955-.812-.59-.812.59.31-.955L2 4.705h1.004l.31-.955z"
    fill="#d7141a"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Dj';
-->
