<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    title,
    desc,
    ariaLabel = 'vn',
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
  viewBox="-15 -10 30 20"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path fill="#DA251d" d="M-20-15h40v30h-40z" /><g id="b" transform="translate(0 -6)"
    ><path id="a" fill="#FF0" transform="rotate(18)" d="M0 0v6h4" /><use
      xlink:href="#a"
      transform="scale(-1 1)"
    /></g
  ><g id="c" transform="rotate(72)"
    ><use xlink:href="#b" /><use xlink:href="#b" transform="rotate(72)" /></g
  ><use xlink:href="#c" transform="scale(-1 1)" />
</svg>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop title
@prop desc
@prop ariaLabel = 'vn'
@prop ...restProps
-->
