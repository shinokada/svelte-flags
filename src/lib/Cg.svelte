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
  viewBox="0 0 3 2"
>
  <rect id="green_area" width="3" height="2" fill="#009543" />
  <path id="yellow_area" d="M 0 2 L 2 0 h 1 v 2 z" fill="#FBDE4A" />
  <path id="red_area" d="M 3 0 v 2 h -2 z" fill="#DC241F" />
</svg>

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
