<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    title,
    desc,
    ariaLabel = 'mm',
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
  viewBox="0 0 18 12"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <rect width="18" height="6" fill="#FECB00" /> <rect width="18" height="6" y="6" fill="#EA2839" />
  <rect width="18" height="4" y="4" fill="#34B233" />
  <g transform="translate(9,6.422)scale(4.422)">
    <polygon id="pt" points="-0.3249196962329062,0 0,-1 0.3249196962329062,0" fill="#FFF" />
    <use xlink:href="#pt" transform="rotate(-144)" />
    <use xlink:href="#pt" transform="rotate(-72)" /> <use xlink:href="#pt" transform="rotate(72)" />
    <use xlink:href="#pt" transform="rotate(144)" />
  </g>
</svg>
