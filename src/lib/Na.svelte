<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    title,
    desc,
    ariaLabel = 'na',
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
  viewBox="0 0 90 60"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <defs><clipPath id="a"><path d="M0 0h90v60H0z" /></clipPath></defs><path
    fill="#003580"
    d="M0 60V0h90z"
  /><path fill="#009543" d="M90 0v60H0z" /><g fill="none" clip-path="url(#a)"
    ><path stroke="#fff" stroke-width="20" d="M0 60L90 0" /><path
      stroke="#d21034"
      stroke-width="15"
      d="M0 60L90 0"
    /></g
  ><g fill="#ffce00" transform="translate(18 16.341)"
    ><path
      d="M0-10l1.55 4.2L5-8.66l-.76 4.42L8.66-5 5.8-1.55 10 0 5.8 1.55 8.66 5l-4.42-.76L5 8.66 1.55 5.8 0 10l-1.55-4.2L-5 8.66l.76-4.42-4.42.76 2.86-3.45L-10 0l4.2-1.55L-8.66-5l4.42.76L-5-8.66l3.45 2.86z"
    /><circle r="5.5" stroke="#003580" /></g
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
@prop ariaLabel = 'na'
@prop ...restProps
-->
