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
    ariaLabel = 'kp',
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
  viewBox="0 0 72 36"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <rect fill="#024FA2" width="72" height="36" /> <rect fill="#fff" y="6" width="72" height="24" />
  <rect fill="#ED1C27" y="7" width="72" height="22" /> <circle fill="#fff" cx="24" cy="18" r="8" />
  <g id="star" transform="translate(24,18) scale(7.75)" fill="#ED1C27">
    <g id="cone">
      <polygon id="triangle" points="0,0 0,1 .5,1" transform="translate(0,-1) rotate(18)" />
      <use xlink:href="#triangle" transform="scale(-1,1)" id="use12" />
    </g> <use xlink:href="#cone" transform="rotate(72)" id="use14" />
    <use xlink:href="#cone" transform="rotate(-72)" id="use16" />
    <use xlink:href="#cone" transform="rotate(144)" id="use18" />
    <use xlink:href="#cone" transform="rotate(-144)" id="use20" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com/)
## Props
@props: 
-->
