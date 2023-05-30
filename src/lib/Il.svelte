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
  viewBox="0 0 1100 800"
  ><path d="M0 0h1100v800H0z" fill="#fff" /><path
    d="M0 75h1100v125H0zm0 525h1100v125H0z"
    fill="#0038b8"
  /><path
    d="M423.816 472.853h252.368L550 254.295zM550 545.705l126.184-218.558H423.816z"
    fill="none"
    stroke="#0038b8"
    stroke-width="27.5"
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
