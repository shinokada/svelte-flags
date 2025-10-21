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
  viewBox="0 0 600 400"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <defs
    ><path
      id="a"
      transform="scale(21)"
      fill="#fff"
      d="M0-1L.588.809-.952-.309H.952L-.588.809z"
    /></defs
  ><path fill="#002395" d="M0 0h600v400H0z" /><path fill="#fff" d="M0 0h244v164H0z" /><path
    fill="#002395"
    d="M0 0h80v160H0z"
  /><path fill="#ED2939" d="M160 0h80v160h-80z" /><path
    fill="#fff"
    d="M355 183l12.875 20.5H404.5V275L377 232l-37 59h18l19-34 39 70 39-70 19 34h18l-37-59-27.5 43v-39.5H444l12.25-19.5H427.5v-12.5h36.625L477 183H355zm43 87.5h-40v14h40zm76 0h-40v14h40z"
  /><use xlink:href="#a" x="416" y="362" /><use xlink:href="#a" x="371" y="328" /><use
    xlink:href="#a"
    x="461"
    y="328"
  /><use xlink:href="#a" x="333" y="227" /><use xlink:href="#a" x="499" y="227" />
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
