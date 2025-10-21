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
  viewBox="0 0 500 300"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <defs>
    <g id="b" fill="#1eb53a">
      <g id="s">
        <g id="t">
          <g id="c">
            <path id="h" d="M0,-20V0H20" transform="rotate(30,0,-20)" />
            <use xlink:href="#h" transform="scale(-1,1)" />
          </g> <use xlink:href="#c" transform="rotate(120)" />
          <use xlink:href="#c" transform="rotate(240)" />
        </g> <use xlink:href="#t" transform="rotate(180)" />
      </g> <use xlink:href="#s" fill="#ce1126" transform="scale(0.82)" />
    </g> <use id="star" xlink:href="#b" x="250" y="106" />
  </defs> <path d="M0,0H500L0,300H500z" fill="#ce1126" />
  <path d="M0,0V300L500,0V300z" fill="#1eb53a" />
  <path d="M0,0 500,300M500,0 0,300" stroke="#fff" stroke-width="40" />
  <circle cx="250" cy="150" r="85" fill="#fff" /> <use xlink:href="#star" />
  <use xlink:href="#star" transform="rotate(120,250,150)" />
  <use xlink:href="#star" transform="rotate(240,250,150)" />
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
