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
  viewBox="0 0 9600 4800"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <defs
    ><clipPath id="a"><path d="M0 0h12v6H0z" /></clipPath><clipPath id="b"
      ><path d="M0 0v1.5h8V4zm6 0H3v4h-5z" /></clipPath
    ></defs
  ><g transform="scale(800)" stroke-width=".6" fill="#012169" clip-path="url(#a)"
    ><path d="M0 0h12v6H0z" /><path stroke="#fff" d="M0 0l6 3M0 3l6-3" /><path
      stroke="#c8102e"
      stroke-width=".4"
      clip-path="url(#b)"
      d="M0 0l6 3M0 3l6-3"
    /><path stroke="#fff" stroke-width="1" d="M3 0v4M0 1.5h7" /><path
      stroke="#c8102e"
      d="M3 0v4M0 1.5h7"
    /><path d="M0 3h6V0h6v6H0z" /></g
  ><g transform="translate(7200 2400)"
    ><g id="d"
      ><path
        id="c"
        fill="#fff"
        d="M0-1992l81 249h261l-211 153 81 249L0-1494l-212 153 81-249-211-153h261z"
      /><use transform="rotate(24)" xlink:href="#c" /><use
        transform="rotate(48)"
        xlink:href="#c"
      /></g
    ><use transform="rotate(72)" xlink:href="#d" /><use
      transform="rotate(144)"
      xlink:href="#d"
    /><use transform="rotate(216)" xlink:href="#d" /><use
      transform="rotate(288)"
      xlink:href="#d"
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
