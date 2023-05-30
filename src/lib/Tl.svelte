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
  viewBox="0 0 1200 600"
  ><path d="M1200 600V0H0v600z" fill="#dc241f" /><path d="M0 0v600l600-300z" fill="#ffc726" /><path
    d="M0 0v600l400-300z"
  /><path
    d="M92.858 208.928l19.76 189.181 95.212-164.663-173.817 77.251 186.025 39.67-127.18-141.44"
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
