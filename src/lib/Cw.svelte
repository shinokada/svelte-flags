<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    title,
    desc,
    ariaLabel = 'cw',
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
  viewBox="0 0 54 36"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <rect width="54" height="36" fill="#002b7f" /> <path d="M0,22.5H54V27H0z" fill="#f9e814" />
  <g fill="#fff" id="s">
    <g id="f">
      <g id="t">
        <path d="m12,8v4h2z" transform="rotate(18,12,8)" id="o" />
        <use xlink:href="#o" x="-24" transform="scale(-1,1)" />
      </g> <use xlink:href="#t" transform="rotate(72,12,12)" />
    </g> <use xlink:href="#t" transform="rotate(-72,12,12)" />
    <use xlink:href="#f" transform="rotate(144,12,12)" />
  </g> <use xlink:href="#s" x="-4" y="-4" transform="scale(0.75)" />
</svg>
