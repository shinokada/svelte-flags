<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'Ne';
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
  viewBox="0 0 700 600"
>
  <rect width="700" height="600" fill="#0DB02B" />
  <rect width="700" height="400" fill="#FFF" />
  <rect width="700" height="200" fill="#e05206" />
  <circle cx="350" cy="300" r="85" fill="#e05206" />
</svg>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let ariaLabel = 'Ne';
-->
