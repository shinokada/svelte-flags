<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Cn';
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
  viewBox="0 0 30 20"
  ><defs><path id="a" d="M0-1L.588.809-.952-.309H.952L-.588.809z" fill="#FF0" /></defs><path
    fill="#EE1C25"
    d="M0 0h30v20H0z"
  /><use xlink:href="#a" transform="matrix(3 0 0 3 5 5)" /><use
    xlink:href="#a"
    transform="rotate(23.036 .093 25.536)"
  /><use xlink:href="#a" transform="rotate(45.87 1.273 16.18)" /><use
    xlink:href="#a"
    transform="rotate(69.945 .996 12.078)"
  /><use xlink:href="#a" transform="rotate(20.66 -19.689 31.932)" /></svg
>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Cn';
-->
