<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Kn';
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
  viewBox="0 0 750 500"
  ><defs><clipPath id="a"><path fill="none" d="M0 0h750v500H0z" /></clipPath></defs><g
    clip-path="url(#a)"
    ><path d="M750 0H0v500" fill="#009e49" /><path d="M0 500h750V0" fill="#ce1126" /><path
      d="M0 500L750 0"
      stroke="#fcd116"
      stroke-width="210"
    /><path d="M0 500L750 0" stroke="#000" stroke-width="150" /><g
      id="d"
      transform="rotate(-33.69 514.716 -777.095)"
      fill="#fff"
      ><g id="c"
        ><path id="b" d="M0-70V0h35" transform="rotate(18 0 -70)" /><use
          xlink:href="#b"
          transform="scale(-1 1)"
        /></g
      ><use xlink:href="#c" transform="rotate(72)" /><use
        xlink:href="#c"
        transform="rotate(144)"
      /><use xlink:href="#c" transform="rotate(216)" /><use
        xlink:href="#c"
        transform="rotate(288)"
      /></g
    ><use xlink:href="#d" transform="translate(-285 190)" /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Kn';
-->
