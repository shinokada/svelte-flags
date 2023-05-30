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
  viewBox="0 0 900 450"
>
  <path d="M0,450H900V0H0z" fill="#d62828" />
  <path d="M0,450V0H600z" fill="#fcd856" />
  <path d="M0,450V0H300z" fill="#003f87" />
  <path d="M0,450H900V150z" fill="#fff" />
  <path d="M0,450H900V300z" fill="#007a3d" />
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
