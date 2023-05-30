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
  viewBox="0 0 22 16"
  ><path fill="#ba0c2f" d="M0 0h22v16H0z" /><g fill="#fff"
    ><path d="M6 0h4v16H6z" /><path d="M0 6h22v4H0z" /></g
  ><g fill="#00205b"><path d="M7 0h2v16H7z" /><path d="M0 7h22v2H0z" /></g></svg
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
