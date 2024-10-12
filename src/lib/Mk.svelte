<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    title,
    desc,
    ariaLabel = 'mk',
    ...restProps
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  aria-label={ariaLabel}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="-140 -70 280 140"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path fill="#d82126" d="M-140-70h280V70h-280z" /><path
    d="M-140 14v-28l280 28v-28zm126-84h28L0-15zM14 70h-28L0 15zM-140-70h42L12.86 7.72zm0 140h42L12.86-7.72zM140-70H98L-12.86 7.72zm0 140H98L-12.86-7.72z"
  /><circle r="25" fill="#d82126" /><circle r="20" />
</svg>
