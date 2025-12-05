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
  viewBox="0 0 90 60"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <rect width="30" height="60" fill="#007a5e" />
  <rect x="30" width="30" height="60" fill="#ce1126" />
  <rect x="60" width="30" height="60" fill="#fcd116" />
  <g transform="translate(45,30)" fill="#fcd116">
    <g id="c">
      <path id="t" d="M 0,-8 v 8 h 4 z" transform="rotate(18 0,-8)" />
      <use xlink:href="#t" transform="scale(-1,1)" />
    </g> <use xlink:href="#c" transform="rotate(72)" />
    <use xlink:href="#c" transform="rotate(144)" /> <use xlink:href="#c" transform="rotate(216)" />
    <use xlink:href="#c" transform="rotate(288)" />
  </g>
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
