<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'Cu';
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
  xmlns:svg="http://www.w3.org/2000/svg"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 800 400"
>
  <path d="M0,0h800v400H0z" fill="#002a8f" />
  <path d="M0,80h800v80H0v80h800v80H0z" fill="#fff" />
  <path d="M346.4,200L0,0v400z" fill="#cf142b" />
  <path d="M115.5,140l35.35,108.5 l-92.5-67h114.2l-92.5,67z" fill="#fff" />
</svg>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let ariaLabel = 'Cu';
-->
