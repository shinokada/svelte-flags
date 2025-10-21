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
  viewBox="0 0 16 8"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <defs><clipPath id="a"><path d="M0 0h16v8H0z" /></clipPath></defs><g clip-path="url(#a)"
    ><path fill="#002395" d="M0 0h16v8H0z" /><path d="M4.24 0h8v8z" fill="#fecb00" /><g id="c"
      ><path d="M2.353.525L2.8-.85 3.247.525l-1.17-.85h1.446z" fill="#fff" id="b" /><use
        xlink:href="#b"
        x="1"
        y="1"
      /><use xlink:href="#b" x="2" y="2" /></g
    ><use xlink:href="#c" x="3" y="3" /><use xlink:href="#c" x="6" y="6" /></g
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
