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
  viewBox="0 0 1200 600"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <defs
    ><clipPath id="b"><path d="M0 0h600v300H0z" /></clipPath><clipPath id="c"
      ><path d="M0 0l300 150H0zm300 0h300L300 150zm0 150h300v150zm0 0v150H0z" /></clipPath
    ><g id="d"
      ><g id="a"
        ><path d="M0 0v.5L1 0z" transform="translate(0 -.325)" /><path
          d="M0 0v-.5L1 0z"
          transform="rotate(-36 .5 -.162)"
        /></g
      ><use xlink:href="#a" transform="scale(-1 1)" /><use
        xlink:href="#a"
        transform="rotate(72 0 0)"
      /><use xlink:href="#a" transform="rotate(-72 0 0)" /><use
        xlink:href="#a"
        transform="scale(-1 1) rotate(72)"
      /></g
    ></defs
  ><path fill="#012169" d="M0 0h1200v600H0z" /><path
    stroke="#FFF"
    d="M0 0l600 300M0 300L600 0"
    stroke-width="60"
    clip-path="url(#b)"
  /><path
    stroke="#C8102E"
    d="M0 0l600 300M0 300L600 0"
    stroke-width="40"
    clip-path="url(#c)"
  /><path stroke="#FFF" d="M300 0v300M0 150h600" stroke-width="100" clip-path="url(#b)" /><path
    stroke="#C8102E"
    d="M300 0v300M0 150h600"
    stroke-width="60"
    clip-path="url(#b)"
  /><use xlink:href="#d" fill="#FFF" transform="matrix(45.4 0 0 45.4 900 120)" /><use
    xlink:href="#d"
    fill="#C8102E"
    transform="matrix(30 0 0 30 900 120)"
  /><g transform="rotate(82 900 240)"
    ><use xlink:href="#d" fill="#FFF" transform="rotate(-82 519.022 -457.666) scale(40.4)" /><use
      xlink:href="#d"
      fill="#C8102E"
      transform="rotate(-82 519.022 -457.666) scale(25)"
    /></g
  ><g transform="rotate(82 900 240)"
    ><use xlink:href="#d" fill="#FFF" transform="rotate(-82 668.57 -327.666) scale(45.4)" /><use
      xlink:href="#d"
      fill="#C8102E"
      transform="rotate(-82 668.57 -327.666) scale(30)"
    /></g
  ><use xlink:href="#d" fill="#FFF" transform="matrix(50.4 0 0 50.4 900 480)" /><use
    xlink:href="#d"
    fill="#C8102E"
    transform="matrix(35 0 0 35 900 480)"
  />
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
