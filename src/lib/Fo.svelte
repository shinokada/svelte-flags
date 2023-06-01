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
  viewBox="0 0 22 16"
>
  <rect fill="#FFF" width="22" height="16" />
  <g fill="#0065BD">
    <rect x="6" width="4" height="16" />
    <rect y="6" width="22" height="4" />
  </g>
  <g fill="#ED2939">
    <rect x="7" width="2" height="16" />
    <rect y="7" width="22" height="2" />
  </g>
</svg>

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
