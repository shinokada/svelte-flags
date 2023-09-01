<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'Lu';
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
  viewBox="0 0 10 6"
  ><path fill="#00A3E0" d="M0 3h10v3H0z" /><path fill="#EF3340" d="M0 0h10v3H0z" /><path
    fill="#fff"
    d="M0 2h10v2H0z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let ariaLabel = 'Lu';
-->
