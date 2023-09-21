<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'So';
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
  viewBox="0 0 81 54"
  ><path fill="#4189DD" d="M0 0h81v54H0z" /><g transform="matrix(13 0 0 13 40.5 27)"
    ><g id="b"
      ><path id="a" fill="#FFF" transform="rotate(18 3.157 -.5)" d="M0 0v1h.5z" /><use
        xlink:href="#a"
        transform="scale(-1 1)"
      /></g
    ><use xlink:href="#b" transform="rotate(72)" /><use
      xlink:href="#b"
      transform="rotate(-72)"
    /><use xlink:href="#b" transform="rotate(144)" /><use
      xlink:href="#b"
      transform="rotate(-144)"
    /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'So';
-->
