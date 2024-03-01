<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Sc';
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
  viewBox="0 0 900 450"
>
  <path d="M0,450H900V0H0z" fill="#d62828" />
  <path d="M0,450V0H600z" fill="#fcd856" />
  <path d="M0,450V0H300z" fill="#003f87" />
  <path d="M0,450H900V150z" fill="#fff" />
  <path d="M0,450H900V300z" fill="#007a3d" />
</svg>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Sc';
-->
