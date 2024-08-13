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
    ariaLabel =  "pa" , 
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
  viewBox="0 0 900 600"
>
  {#if title?.id && title.title}
    <title id="{title.id}">{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id="{desc.id}">{desc.desc}</desc>
  {/if}
    <path d="M0 0h900v600H0z" fill="#fff"/><path d="M0 300h450v300H0z" fill="#002855"/><path d="M450 0h450v300H450z" fill="#A6192E"/><path d="M675 375l16.84 51.822 54.49.002-44.082 32.03 16.836 51.823L675 478.65l-44.084 32.027 16.836-51.823-44.081-32.03 54.489-.002z" fill="#A6192E" fill-rule="evenodd"/><path d="M225 75l16.84 51.822 54.49.002-44.082 32.03 16.836 51.823L225 178.65l-44.084 32.027 16.836-51.823-44.081-32.03 54.489-.002z" fill="#002855" fill-rule="evenodd"/>
</svg>

