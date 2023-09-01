<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'Ch';
</script>

<svg
  viewBox="0 0 32 32"
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
  ><path d="M0 0h32v32H0z" fill="#da291c" /><path
    d="M13 6h6v7h7v6h-7v7h-6v-7H6v-6h7z"
    fill="#fff"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let ariaLabel = 'Ch';
-->
