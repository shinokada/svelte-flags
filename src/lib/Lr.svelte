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
  viewBox="0 0 209 110"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <rect fill="#bf0a30" width="209" height="110" />
  <path d="M0,15H209 M0,35H209 M0,55H209 M0,75H209 M0,95H209" stroke="#fff" stroke-width="10" />
  <rect fill="#002868" width="50" height="50" />
  <g transform="translate(25,25) scale(15)">
    <g id="B">
      <polygon id="A" fill="#fff" points="0,0 0,1 .5,1" transform="translate(0,-1) rotate(18)" />
      <use xlink:href="#A" transform="scale(-1,1)" />
    </g> <use xlink:href="#B" transform="rotate(72)" />
    <use xlink:href="#B" transform="rotate(-72)" /> <use xlink:href="#B" transform="rotate(144)" />
    <use xlink:href="#B" transform="rotate(-144)" />
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
