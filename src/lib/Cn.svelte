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

  const ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
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
  viewBox="0 0 30 20"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <defs><path id="a" d="M0-1L.588.809-.952-.309H.952L-.588.809z" fill="#FF0" /></defs><path
    fill="#EE1C25"
    d="M0 0h30v20H0z"
  /><use xlink:href="#a" transform="matrix(3 0 0 3 5 5)" /><use
    xlink:href="#a"
    transform="rotate(23.036 .093 25.536)"
  /><use xlink:href="#a" transform="rotate(45.87 1.273 16.18)" /><use
    xlink:href="#a"
    transform="rotate(69.945 .996 12.078)"
  /><use xlink:href="#a" transform="rotate(20.66 -19.689 31.932)" />
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
