<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Mw';
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
  viewBox="-225 -114 450 300"
>
  <title>Flag of Malawi</title>
  <rect x="-225" y="-114" width="450" height="300" />
  <g fill="#CE1126">
    <circle r="64.5" />
    <rect x="-225" y="-14" width="450" height="100" />
    <g id="r16">
      <g id="r8">
        <g id="r4">
          <g id="r2">
            <path
              id="r"
              d="M0-102c-2.2,0-3,3.3-3,6.5 0,8 1,12 3,23.5 2.04-11.5 3-15.6 3-23.5 0-3.3-1-6.5-3-6.5"
            />
            <use transform="rotate(5)" xlink:href="#r" />
          </g>
          <use transform="rotate(10)" xlink:href="#r2" />
        </g>
        <use transform="rotate(20)" xlink:href="#r4" />
      </g>
      <use transform="rotate(40)" xlink:href="#r8" />
    </g>
    <use transform="rotate(-80)" xlink:href="#r16" />
  </g>
  <rect x="-225" y="-21.5" width="450" height="7.5" />
  <rect x="-225" y="86" width="450" height="100" fill="#339E35" />
</svg>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Mw';
-->
