<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Tn';
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
  viewBox="-60 -40 120 80"
>
  <g fill="#E70013">
    <rect x="-60" y="-40" width="120" height="80" />
    <circle fill="#FFF" r="20" />
    <circle r="15" />
    <circle fill="#FFF" cx="4" r="12" />
    <path
      transform="translate(4)scale(9)rotate(-90)"
      d="M0,-1 L0.58779,0.80902 L-0.95106,-0.30902 L0.95106,-0.30902 L-0.58779,0.80902z"
    />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Tn';
-->
