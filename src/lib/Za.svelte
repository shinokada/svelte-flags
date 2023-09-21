<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Za';
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
  viewBox="0 0 9 6"
  ><clipPath id="c"><path d="M0 0l4.5 3L0 6" id="b" /></clipPath><clipPath id="a"
    ><path d="M0 0h9v6H0z" /></clipPath
  ><g clip-path="url(#a)"
    ><path d="M0 0v6h9V0z" fill="#001489" /><path d="M0 0v3h9V0z" fill="#e03c31" /><g
      stroke-width="2"
      stroke="#fff"
      ><path d="M0 0l4.5 3L0 6m4.5-3H9" id="d" /><use
        xlink:href="#b"
        stroke="#ffb81c"
        clip-path="url(#c)"
      /></g
    ><use xlink:href="#d" fill="none" stroke="#007749" stroke-width="1.2" /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Za';
-->
