<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'Fi';
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
  viewBox="0 0 1800 1100"
>
  <rect width="1800" height="1100" fill="#fff" />
  <rect width="1800" height="300" y="400" fill="#003580" />
  <rect width="300" height="1100" x="500" fill="#003580" />
</svg>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let ariaLabel = 'Fi';
-->
