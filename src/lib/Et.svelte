<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    title,
    desc,
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 720 360"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path fill="#da121a" d="M0 0h720v360H0z" /><path fill="#fcdd09" d="M0 0h720v240H0z" /><path
    fill="#078930"
    d="M0 0h720v120H0z"
  /><g transform="translate(360 180)"
    ><circle fill="#0f47af" r="120" /><g id="a"
      ><path
        fill="#fcdd09"
        d="M0-96l-4.206 12.944 17.348 53.39h-23.13l-2.599 8h74.163l11.011-8H21.553z"
      /><path stroke="#fcdd09" stroke-width="4" d="M25.863-35.597l30.564-42.069" /></g
    ><use xlink:href="#a" transform="rotate(72)" /><use
      xlink:href="#a"
      transform="rotate(144)"
    /><use xlink:href="#a" transform="rotate(216)" /><use
      xlink:href="#a"
      transform="rotate(288)"
    /></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop title
@prop desc
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->
