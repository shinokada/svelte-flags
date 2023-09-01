<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'Tz';
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
  viewBox="0 0 72 48"
  ><defs><clipPath id="a"><path d="M0 0h72v48H0z" /></clipPath></defs><path
    fill="#1eb53a"
    d="M0 48V0h72z"
  /><path fill="#00a3dd" d="M72 0v48H0z" /><g clip-path="url(#a)" fill="none"
    ><path stroke="#fcd116" stroke-width="19" d="M0 48L72 0" /><path
      stroke="#000"
      stroke-width="13"
      d="M0 48L72 0"
    /></g
  ></svg
>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let ariaLabel = 'Tz';
-->
