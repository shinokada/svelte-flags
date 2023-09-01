<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'Th';
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
  viewBox="0 0 9 6"
  ><path fill="#A51931" d="M0 0h9v6H0z" /><path fill="#F4F5F8" d="M0 1h9v4H0z" /><path
    fill="#2D2A4A"
    d="M0 2h9v2H0z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let ariaLabel = 'Th';
-->
