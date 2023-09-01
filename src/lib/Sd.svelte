<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'Sd';
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
  viewBox="0 0 12 6"
>
  <rect width="12" height="6" />
  <rect fill="#FFF" width="12" height="4" />
  <rect fill="#D21034" width="12" height="2" />
  <polygon fill="#007229" points="0,0 4,3 0,6" />
</svg>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let ariaLabel = 'Sd';
-->
