<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'Pw';
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
  viewBox="0 0 16 10"
  ><path fill="#09F" d="M0 0h16v10H0z" /><circle fill="#FF0" cx="7" cy="5" r="3" /></svg
>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let ariaLabel = 'Pw';
-->
