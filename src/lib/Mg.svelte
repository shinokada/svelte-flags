<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'Mg';
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
  ><path fill="#007E3A" d="M0 0h3v2H0z" /><path fill="#FC3D32" d="M0 0h3v1H0z" /><path
    fill="#FFF"
    d="M0 0h1v2H0z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let ariaLabel = 'Mg';
-->
