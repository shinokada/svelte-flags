<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Ws';
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
  viewBox="0 0 2880 1440"
  ><defs><path id="a" d="M0 0l.309.951L-.5.363h1l-.809.588z" /></defs><path
    fill="#ce1126"
    d="M0 0h2880v1440H0z"
  /><path fill="#002b7f" d="M0 0h1440v720H0z" /><g fill="#fff"
    ><use xlink:href="#a" transform="matrix(160 0 0 160 720 30)" /><use
      xlink:href="#a"
      transform="matrix(160 0 0 160 500 210)"
    /><use xlink:href="#a" transform="matrix(150 0 0 150 945 180)" /><use
      xlink:href="#a"
      transform="matrix(100 0 0 100 830 364.894)"
    /><use xlink:href="#a" transform="matrix(200 0 0 200 720 499.789)" /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Ws';
-->
