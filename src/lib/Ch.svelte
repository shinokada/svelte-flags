<script>
  export let size = '24';
  export let role = 'img';
</script>

<svg
  viewBox="0 0 32 32"
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
  ><path d="M0 0h32v32H0z" fill="#da291c" /><path
    d="M13 6h6v7h7v6h-7v7h-6v-7H6v-6h7z"
    fill="#fff"
  /></svg
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
