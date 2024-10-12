<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    title,
    desc,
    ariaLabel = 'tz',
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
  viewBox="0 0 72 48"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <defs><clipPath id="a"><path d="M0 0h72v48H0z" /></clipPath></defs><path
    fill="#1eb53a"
    d="M0 48V0h72z"
  /><path fill="#00a3dd" d="M72 0v48H0z" /><g clip-path="url(#a)" fill="none"
    ><path stroke="#fcd116" stroke-width="19" d="M0 48L72 0" /><path
      stroke="#000"
      stroke-width="13"
      d="M0 48L72 0"
    /></g
  >
</svg>
