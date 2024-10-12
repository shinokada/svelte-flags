<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    title,
    desc,
    ariaLabel = 'fm',
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
  viewBox="-19 -10 38 20"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <rect x="-19" y="-10" width="38" height="20" fill="#75b2dd" />
  <g id="star" transform="translate(0,-6)" fill="#fff">
    <g id="c">
      <path id="t" d="M 0,-2 V 0 H 1" transform="rotate(18 0,-2)" />
      <use xlink:href="#t" transform="scale(-1,1)" />
    </g> <use xlink:href="#c" transform="rotate(72)" />
    <use xlink:href="#c" transform="rotate(144)" /> <use xlink:href="#c" transform="rotate(216)" />
    <use xlink:href="#c" transform="rotate(288)" />
  </g> <use xlink:href="#star" transform="rotate(90)" />
  <use xlink:href="#star" transform="rotate(180)" />
  <use xlink:href="#star" transform="rotate(270)" />
</svg>
