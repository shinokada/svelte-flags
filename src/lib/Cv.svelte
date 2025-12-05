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
  viewBox="0 0 510 300"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <rect width="510" height="300" fill="#003893" />
  <rect width="510" height="75" y="150" fill="#fff" />
  <rect width="510" height="25" y="175" fill="#cf2027" />
  <g fill="#f7d116" transform="translate(191.25,187.5)">
    <g id="s2">
      <g id="s" transform="translate(0,-75)">
        <g id="c">
          <path id="t" d="M0,-15V0H7.5" transform="rotate(18,0,-15)" />
          <use xlink:href="#t" transform="scale(-1,1)" />
        </g> <use xlink:href="#c" transform="rotate(72)" />
        <use xlink:href="#c" transform="rotate(144)" />
        <use xlink:href="#c" transform="rotate(216)" />
        <use xlink:href="#c" transform="rotate(288)" />
      </g> <use xlink:href="#s" y="150" />
    </g> <use xlink:href="#s2" transform="rotate(72)" />
    <use xlink:href="#s2" transform="rotate(144)" />
    <use xlink:href="#s2" transform="rotate(216)" />
    <use xlink:href="#s2" transform="rotate(288)" />
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
