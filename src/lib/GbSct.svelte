<script>
  export let size = '24';
</script>

<svg
  width={size}
  height={size}
  {...$$restProps}
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
  viewBox="0 0 5 3"
  ><defs><clipPath id="a"><path d="M0 0h5v3H0z" /></clipPath></defs><g clip-path="url(#a)"
    ><rect width="100%" height="100%" fill="#005EB8" /><path
      d="M0 0l5 3M0 3L5 0"
      stroke="#fff"
      stroke-width="0.6"
    /></g
  ></svg
>
<!--
@component
[Go to Document](https://svelte-flags.codewithshin.com/)
## Props
@prop size = '24';
## Event
- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
-->
