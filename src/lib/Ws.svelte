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
  viewBox="0 0 2880 1440"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <defs><path id="a" d="M0 0l.309.951L-.5.363h1l-.809.588z" /></defs><path
    fill="#ce1126"
    d="M0 0h2880v1440H0z"
  /><path fill="#002b7f" d="M0 0h1440v720H0z" /><g fill="#fff"
    ><use xlink:href="#a" transform="matrix(160 0 0 160 720 30)" /><use
      xlink:href="#a"
      transform="matrix(160 0 0 160 500 210)"
    /><use xlink:href="#a" transform="matrix(150 0 0 150 945 180)" /><use
      xlink:href="#a"
      transform="matrix(100 0 0 100 830 364.894)"
    /><use xlink:href="#a" transform="matrix(200 0 0 200 720 499.789)" /></g
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
