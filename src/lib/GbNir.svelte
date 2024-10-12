<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    title,
    desc,
    ariaLabel = 'gb nir',
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
  viewBox="0 0 60 30"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <clipPath id="a"><path d="M0 0v30h60V0z" /></clipPath><clipPath id="b"
    ><path d="M30 15h30v15zv15H0zH0V0zV0h30z" /></clipPath
  ><g clip-path="url(#a)"
    ><path d="M0 0v30h60V0z" fill="#012169" /><path
      d="M0 0l60 30m0-30L0 30"
      stroke="#fff"
      stroke-width="6"
    /><path d="M0 0l60 30m0-30L0 30" clip-path="url(#b)" stroke="#C8102E" stroke-width="4" /><path
      d="M30 0v30M0 15h60"
      stroke="#fff"
      stroke-width="10"
    /><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6" /></g
  >
</svg>
