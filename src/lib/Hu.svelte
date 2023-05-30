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
  viewBox="0 0 6 3"
  ><path fill="#477050" d="M0 0h6v3H0z" /><path fill="#FFF" d="M0 0h6v2H0z" /><path
    fill="#CE2939"
    d="M0 0h6v1H0z"
  /></svg
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
