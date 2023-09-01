<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'Ro';
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
  ><path fill="#002B7F" d="M0 0h1v2H0z" /><path fill="#FCD116" d="M1 0h1v2H1z" /><path
    fill="#CE1126"
    d="M2 0h1v2H2z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let ariaLabel = 'Ro';
-->
