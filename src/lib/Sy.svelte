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
  viewBox="0 0 900 600"
  ><path d="M0 0h900v600H0z" /><path d="M0 0h900v400H0z" fill="#fff" /><path
    d="M0 0h900v200H0z"
    fill="#ce1126"
  /><path
    d="M251.264 375l48.738-150 48.738 150-127.6-92.705h157.72M551.264 375l48.738-150 48.738 150-127.6-92.705h157.72"
    fill="#007a3d"
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
