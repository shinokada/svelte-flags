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
  viewBox="0 0 809 500"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path fill="#006a4e" d="M0 0h809v500H0z" /><path
    fill="#ffce00"
    d="M0 100h809v100H0zm0 200h809v100H0z"
  /><path fill="#d21034" d="M0 0h300v300H0z" /><g transform="translate(150 150)" fill="#fff"
    ><g id="b"
      ><path id="a" d="M0-95V0h50" transform="rotate(18 0 -95)" /><use
        xlink:href="#a"
        transform="scale(-1 1)"
      /></g
    ><use xlink:href="#b" transform="rotate(72)" /><use
      xlink:href="#b"
      transform="rotate(144)"
    /><use xlink:href="#b" transform="rotate(216)" /><use
      xlink:href="#b"
      transform="rotate(288)"
    /></g
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
