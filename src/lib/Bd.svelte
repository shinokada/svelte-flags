<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  width={size}
  height={size}
  {...$$restProps}
  {role}
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
  viewBox="0 0 20 12"
  ><path fill="#006a4e" d="M0 0h20v12H0z" /><circle cx="9" cy="6" r="4" fill="#f42a41" /></svg
>
<!--
@component
[Go to Document](https://svelte-flags.codewithshin.com/)
## Props
@prop size = '24';
@prop role = 'img';
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
