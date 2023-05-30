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
  viewBox="0 0 600 300"
>
  <rect fill="#6Cf" width="600" height="300" />
  <polygon fill="#FFF" points="200,274 300,260 400,274 300,27" />
  <polygon points="213.5,274 300,260 386.5,274 300,60" />
  <polygon fill="#FCD116" points="200,274 400,274 300,150" />
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
