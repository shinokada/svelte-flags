<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'Gn';
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
  viewBox="0 0 3 2"
>
  <rect width="1" height="2" fill="#ce1126" />
  <rect width="1" height="2" x="1" fill="#fcd116" />
  <rect width="1" height="2" x="2" fill="#009460" />
</svg>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let ariaLabel = 'Gn';
-->
