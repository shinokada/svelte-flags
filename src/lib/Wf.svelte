<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let ariaLabel = 'Wf';
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
  viewBox="0 0 150 100"
  ><path fill="#ED2939" d="M0 0h150v100H0z" /><path fill="#FFF" d="M0 0h40v40H0z" /><path
    fill="#002395"
    d="M0 0h20v40H0z"
  /><path fill="none" stroke="#FFF" d="M0 40h60V0" /><path
    fill="#FFF"
    d="M105 46L93 34h24zm-4 4L89 38v24zm4 4L93 66h24zm4-4l12-12v24z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'Wf';
-->
