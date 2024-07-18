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
    ariaLabel = 'ke',
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
  viewBox="-120 -80 240 160"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <defs>
    <path
      id="spearshape"
      d="M -1,55.4256258422040733928782829281879157421699 h 2 V -38 C 3,-40 3,-43 3,-46 C 3,-48 3,-56 0,-64.6632301492380856250246634162192350325315 C -3,-56 -3,-48 -3,-46 C -3,-43 -3,-40 -1,-38 z"
      stroke-miterlimit="10"
      transform="rotate(30)"
    />
  </defs> <rect x="-120" y="-80" width="240" height="160" fill="#fff" />
  <rect x="-120" y="-80" width="240" height="48" />
  <rect x="-120" y="32" width="240" height="48" fill="#060" />
  <g id="spear">
    <use xlink:href="#spearshape" stroke="#000" /> <use xlink:href="#spearshape" fill="#fff" />
  </g> <use xlink:href="#spear" transform="scale(-1,1)" />
  <path
    fill="#b00"
    d="M -120,-24 V 24 H -19 c 3,8 13,24 19,24 s 16,-16 19,-24 H 120 V -24 H 19 c -3,-8 -13,-24 -19,-24 s -16,16 -19,24 z"
  />
  <path id="deco_r" d="M 19,24 c 3,-8 5,-16 5,-24 s -2,-16 -5,-24 c -3,8 -5,16 -5,24 s 2,16 5,24" />
  <use xlink:href="#deco_r" transform="scale(-1,1)" />
  <g fill="#fff">
    <ellipse rx="4" ry="6" /> <path id="deco_br" d="M 1,5.85 c 0,0 4,8 4,21 s -4,21 -4,21 z" />
    <use xlink:href="#deco_br" transform="scale(-1)" />
    <use xlink:href="#deco_br" transform="scale(-1,1)" />
    <use xlink:href="#deco_br" transform="scale(1,-1)" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop title
@prop desc
@prop ariaLabel = 'ke'
@prop ...restProps
-->
