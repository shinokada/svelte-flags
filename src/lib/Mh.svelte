<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    title,
    desc,
    ariaLabel = 'mh',
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
  viewBox="0 0 57 30"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path fill="#003087" d="M0 0h57v30H0z" /><path d="M0 29.52V28.8L57 3.5v8.74z" fill="#fff" /><path
    d="M0 29.04v-.48L57 .48v5.88z"
    fill="#E57200"
  /><g fill="#fff" transform="translate(10.9536 10.9536)"
    ><g id="b"
      ><path d="M0-9.3L.559 0H-.559z" /><path
        id="a"
        d="M0-6.6588L.6824 0H-.6824z"
        transform="rotate(15)"
      /><use xlink:href="#a" transform="rotate(15)" /><use
        xlink:href="#a"
        transform="rotate(30)"
      /><use xlink:href="#a" transform="rotate(45)" /><use
        xlink:href="#a"
        transform="rotate(60)"
      /></g
    ><use xlink:href="#b" transform="rotate(90)" /><use
      xlink:href="#b"
      transform="rotate(180)"
    /><use xlink:href="#b" transform="rotate(270)" /></g
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
@prop ariaLabel = 'mh'
@prop ...restProps
-->
