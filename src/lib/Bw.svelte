<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'Bw';
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
  viewBox="0 0 36 24"
  ><path fill="#6DA9D2" d="M0 0h36v24H0z" /><path fill="#fff" d="M0 9h36v6H0z" /><path
    d="M0 10h36v4H0z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let ariaLabel = 'Bw';
-->
