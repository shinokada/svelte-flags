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
  viewBox="0 0 1400 550"
  ><path fill="#8d1b3d" d="M0 0h1400v550H0z" /><path
    d="M400 550H0V0h400l100 30.556L400 61.11l100 30.556-100 30.555 100 30.556-100 30.555 100 30.556-100 30.555L500 275l-100 30.556 100 30.555-100 30.556 100 30.555-100 30.556 100 30.555-100 30.556 100 30.555z"
    fill="#fff"
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
