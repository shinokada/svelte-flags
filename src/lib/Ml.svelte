<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'Ml';
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
  viewBox="0 0 450 300"
>
  <rect fill="#CE1126" width="450" height="300" />
  <rect fill="#FCD116" width="300" height="300" />
  <rect fill="#14B53A" width="150" height="300" />
</svg>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let ariaLabel = 'Ml';
-->
