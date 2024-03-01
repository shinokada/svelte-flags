<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'St';
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
  viewBox="0 0 2800 1400"
  ><path fill="#12ad2b" d="M0 0h2800v1400H0z" /><path fill="#ffce00" d="M0 400h2800v600H0z" /><path
    d="M0 0v1400l700-700"
    fill="#d21034"
  /><g id="c" transform="translate(1400 700)" fill="#000"
    ><g id="b"
      ><path id="a" d="M0-200V0h100" transform="rotate(18 0 -200)" /><use
        xlink:href="#a"
        transform="scale(-1 1)"
      /></g
    ><use xlink:href="#b" transform="rotate(72)" /><use
      xlink:href="#b"
      transform="rotate(144)"
    /><use xlink:href="#b" transform="rotate(216)" /><use
      xlink:href="#b"
      transform="rotate(288)"
    /></g
  ><use xlink:href="#c" x="700" /></svg
>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'St';
-->
