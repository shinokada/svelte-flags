<script lang='ts'>
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
  interface Props extends BaseProps{
    title?: TitleType;
    desc?: DescType;
    ariaLabel?: string;
  }

  let { 
    size = ctx.size || '24', 
    role = ctx.role || 'img', 
    title, 
    desc, 
    ariaLabel =  "tv" , 
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
  viewBox="0 0 1200 600"
>
  {#if title?.id && title.title}
    <title id="{title.id}">{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id="{desc.id}">{desc.desc}</desc>
  {/if}
    <clipPath id="a"><path d="M0 0h650v350H0z"/></clipPath><clipPath id="b"><path d="M0 0v150h650v150h-50zm0 300v50h300V0h300z"/></clipPath><path fill="#012169" d="M0 0h1200v600H0z"/><path d="M0 0l600 300m0-300L0 300" stroke="#fff" stroke-width="60" clip-path="url(#a)"/><path d="M0 0l600 300m0-300L0 300" stroke="#c8102e" stroke-width="40" clip-path="url(#b)"/><path d="M0 150h650M300 0v350" stroke="#fff" stroke-width="100"/><path d="M0 150h650M300 0v350" stroke="#c8102e" stroke-width="60"/><path d="M0 300h600V0h600v600H0z" fill="#009cde"/><path d="M645.34 490.913l29.436 90.597-77.066-55.992h95.26l-77.067 55.993zM817.462 464l-29.436 90.597L758.589 464l77.066 55.992h-95.26zm0-121.984l-29.436 90.597-29.437-90.597 77.066 55.992-95.26.001zm126.005 91.152l-29.437 90.597-29.436-90.597 77.066 55.992-95.26.001zm0-265.413l-29.437 90.597-29.436-90.597 77.066 55.992H866.4zm52.975 172.21l29.436 90.597-77.066-55.992h95.26l-77.067 55.993zm52.923-208.404l-29.437 90.597-29.437-90.597 77.067 55.992-95.26.001zm53.471 139.913l29.437 90.597-77.067-55.992h95.26l-77.067 55.993zm0-234.069l29.437 90.597-77.067-55.992h95.26l-77.067 55.993z" fill="#fedd00"/>
</svg>

