<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Hn';
</script>

<svg
  viewBox="0 0 1260 630"
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
  ><path d="M1260 0H0v630h1260z" fill="#0d3b99" /><path
    d="M1260 210H0v210h1260z"
    fill="#fff"
  /><path id="a" d="M630 280l20.572 63.315-53.859-39.131h66.573l-53.859 39.131z" fill="#0d3b99" /><g
    id="b"
    ><use transform="translate(-175 -52.465)" xlink:href="#a" /><use
      transform="translate(-175 52.534)"
      xlink:href="#a"
    /></g
  ><use transform="translate(350)" xlink:href="#b" /></svg
>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Hn';
-->
