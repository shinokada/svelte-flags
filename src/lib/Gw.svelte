<script lang="ts">
  import { getContext } from 'svelte';
  import type { SVGAttributes } from 'svelte/elements';

  type TitleType = {
    id?: string;
    title?: string;
  };
  type DescType = {
    id?: string;
    desc?: string;
  };
  interface BaseProps extends SVGAttributes<SVGElement> {
    size?: string;
    role?: string;
  }
  interface CtxType extends BaseProps {}
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props extends BaseProps {
    title?: TitleType;
    desc?: DescType;
    ariaLabel?: string;
  }

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    title,
    desc,
    ariaLabel = 'gw',
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
  viewBox="-2 -3 12 6"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <rect x="-2" y="-3" width="4" height="6" fill="#ce1126" />
  <rect x="2" y="-3" width="8" height="3" fill="#fcd116" />
  <rect x="2" width="8" height="3" fill="#009e49" />
  <g id="c">
    <path id="t" d="M 0,-1 v 1 h .5" transform="rotate(18 0,-1)" fill="#000" />
    <use xlink:href="#t" transform="scale(-1,1)" />
  </g> <use xlink:href="#c" transform="rotate(72)" />
  <use xlink:href="#c" transform="rotate(144)" /> <use xlink:href="#c" transform="rotate(216)" />
  <use xlink:href="#c" transform="rotate(288)" />
</svg>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com/)
## Props
@props: 
-->
