<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Vc';
</script>

<svg
  viewBox="0 0 192 128"
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
  ><path d="M0 0h192v128H0z" fill="#fcd022" /><path d="M144 0h48v128h-48z" fill="#007c2e" /><path
    d="M0 0h48v128H0z"
    fill="#002674"
  /><path
    d="M83.911 92.44L96 115.196l12.089-22.756L96 69.685zM68.267 64l12.089 22.755L92.444 64 80.356 41.244zm31.289 0l12.088 22.756L123.734 64l-12.09-22.756z"
    fill="#007c2e"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Vc';
-->
