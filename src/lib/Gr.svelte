<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'Gr';
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
  viewBox="0 0 27 18"
  ><path fill="#0D5EAF" d="M0 0h27v18H0z" /><path
    fill="none"
    stroke-width="2"
    stroke="#FFF"
    d="M5 0v11M0 5h10m0-2h17M10 7h17M0 11h27M0 15h27"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let ariaLabel = 'Gr';
-->
