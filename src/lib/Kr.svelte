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
  viewBox="-36 -24 72 48"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path fill="#fff" d="M-36-24h72v48h-72z" /><g transform="rotate(-56.31)"
    ><g id="b"
      ><path id="a" d="M-6-25H6m-12 3H6m-12 3H6" stroke="#000" stroke-width="2" /><use
        xlink:href="#a"
        y="44"
      /></g
    ><path stroke="#fff" d="M0 17v10" /><circle fill="#cd2e3a" r="12" /><path
      fill="#0047a0"
      d="M0-12A6 6 0 000 0a6 6 0 010 12 12 12 0 010-24z"
    /></g
  ><g transform="rotate(-123.69)"
    ><use xlink:href="#b" /><path stroke="#fff" d="M0-23.5v3M0 17v3.5m0 3v3" /></g
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
