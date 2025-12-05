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
  viewBox="0 0 9 6"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <clipPath id="c"><path d="M0 0l4.5 3L0 6" id="b" /></clipPath><clipPath id="a"
    ><path d="M0 0h9v6H0z" /></clipPath
  ><g clip-path="url(#a)"
    ><path d="M0 0v6h9V0z" fill="#001489" /><path d="M0 0v3h9V0z" fill="#e03c31" /><g
      stroke-width="2"
      stroke="#fff"
      ><path d="M0 0l4.5 3L0 6m4.5-3H9" id="d" /><use
        xlink:href="#b"
        stroke="#ffb81c"
        clip-path="url(#c)"
      /></g
    ><use xlink:href="#d" fill="none" stroke="#007749" stroke-width="1.2" /></g
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
