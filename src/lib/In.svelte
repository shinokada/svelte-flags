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
  viewBox="0 0 900 600"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path fill="#f93" d="M0 0h900v200H0z" /><path fill="#fff" d="M0 200h900v200H0z" /><path
    fill="#128807"
    d="M0 400h900v200H0z"
  /><g transform="translate(450 300)"
    ><circle r="92.5" fill="#008" /><circle r="80" fill="#fff" /><circle r="16" fill="#008" /><g
      id="d"
      ><g id="c"
        ><g id="b"
          ><g id="a" fill="#008"
            ><circle r="3.5" transform="rotate(7.5 -40 610.282)" /><path
              d="m0 80 3-48-2-16.031V15h-2v.969L-3 32l3 48z"
            /></g
          ><use xlink:href="#a" transform="rotate(15)" /></g
        ><use xlink:href="#b" transform="rotate(30)" /></g
      ><use xlink:href="#c" transform="rotate(60)" /></g
    ><use xlink:href="#d" transform="rotate(120)" /><use
      xlink:href="#d"
      transform="rotate(-120)"
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
