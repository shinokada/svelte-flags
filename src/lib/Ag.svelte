<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    title,
    desc,
    ariaLabel = 'ag',
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
  viewBox="0 0 138 92"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path fill="#fff" d="M0 0h138v92H0z" /><path d="M0 0h138v46H0z" /><g transform="translate(69 36)"
    ><g id="b"
      ><path id="a" d="M-30 0L0-5.742V5.742z" fill="#fcd116" /><use
        xlink:href="#a"
        transform="rotate(22.5)"
      /><use xlink:href="#a" transform="rotate(45)" /></g
    ><use xlink:href="#b" transform="rotate(67.5)" /><use
      xlink:href="#b"
      transform="rotate(135)"
    /></g
  ><path fill="#0072c6" d="M0 36h138v20H0z" /><path d="M0 0v92h138V0L69 92z" fill="#ce1126" />
</svg>
