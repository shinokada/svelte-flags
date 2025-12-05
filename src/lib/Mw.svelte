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
  viewBox="-225 -114 450 300"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <title>Flag of Malawi</title> <rect x="-225" y="-114" width="450" height="300" />
  <g fill="#CE1126">
    <circle r="64.5" /> <rect x="-225" y="-14" width="450" height="100" />
    <g id="r16">
      <g id="r8">
        <g id="r4">
          <g id="r2">
            <path
              id="r"
              d="M0-102c-2.2,0-3,3.3-3,6.5 0,8 1,12 3,23.5 2.04-11.5 3-15.6 3-23.5 0-3.3-1-6.5-3-6.5"
            /> <use transform="rotate(5)" xlink:href="#r" />
          </g> <use transform="rotate(10)" xlink:href="#r2" />
        </g> <use transform="rotate(20)" xlink:href="#r4" />
      </g> <use transform="rotate(40)" xlink:href="#r8" />
    </g> <use transform="rotate(-80)" xlink:href="#r16" />
  </g> <rect x="-225" y="-21.5" width="450" height="7.5" />
  <rect x="-225" y="86" width="450" height="100" fill="#339E35" />
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
