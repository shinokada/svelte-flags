<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'Pr';
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
  viewBox="0 0 900 600"
  fill="#FFF"
  ><path d="M0 0h900v600H0" /><path
    stroke="red"
    stroke-width="120"
    d="M0 60h900m0 240H0m0 240h900"
  /><path fill="#06F" d="M0 0v600l520-300" /><path d="M114 382l59-183 59 183L77 269h192" /></svg
>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let ariaLabel = 'Pr';
-->
