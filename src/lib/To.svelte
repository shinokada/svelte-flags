<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'To';
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
  viewBox="0 0 96 48"
  ><g fill="#C10000"
    ><path d="M0 0h96v48H0z" /><path fill="#fff" d="M0 0h40v24H0z" /><path
      d="M17 3h6v18h-6z"
    /><path d="M11 9h18v6H11z" /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'To';
-->
