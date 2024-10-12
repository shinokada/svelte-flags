<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    title,
    desc,
    ariaLabel = 'km',
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
  viewBox="0 0 500 300"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <rect fill="#3A75C4" width="500" height="300" /> <rect fill="#CE1126" width="500" height="225" />
  <rect fill="#FFF" width="500" height="150" /> <rect fill="#FFC61E" width="500" height="75" />
  <path fill="#3D8E33" d="M0,300l250-150L0,0V300z" />
  <circle fill="#FFF" cx="85" cy="150" r="67.5" />
  <circle fill="#3D8E33" cx="115" cy="150" r="67.5" />
  <path
    id="star"
    fill="#FFF"
    d="M100.0104,89.1996l7.3594,22.5883L88.1125,97.8394h23.775l-19.2573,13.9486L100.0104,89.1996z"
  /> <use xlink:href="#star" y="32.2083" /> <use xlink:href="#star" y="64.4166" />
  <use xlink:href="#star" y="96.625" />
</svg>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop title
@prop desc
@prop ariaLabel = 'km'
@prop ...restProps
-->
