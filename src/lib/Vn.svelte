<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Vn';
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
  viewBox="-15 -10 30 20"
  ><path fill="#DA251d" d="M-20-15h40v30h-40z" /><g id="b" transform="translate(0 -6)"
    ><path id="a" fill="#FF0" transform="rotate(18)" d="M0 0v6h4" /><use
      xlink:href="#a"
      transform="scale(-1 1)"
    /></g
  ><g id="c" transform="rotate(72)"
    ><use xlink:href="#b" /><use xlink:href="#b" transform="rotate(72)" /></g
  ><use xlink:href="#c" transform="scale(-1 1)" /></svg
>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Vn';
-->
