<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'Gh';
</script>

<svg
  width={size}
  height={size}
  {...$$restProps}
  {role}
  aria-label={ariaLabel}
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
  viewBox="0 0 450 300"
>
  <rect width="450" height="300" fill="#006b3f" />
  <rect width="450" height="200" fill="#fcd116" />
  <rect width="450" height="100" fill="#ce1126" />
  <path d="M225,100 257.492,200 172.427,138.197H277.573L192.508,200z" fill="#000" />
</svg>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let ariaLabel = 'Gh';
-->
