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
    ariaLabel =  "uz" , 
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
  viewBox="0 0 500 250"
>
  {#if title?.id && title.title}
    <title id="{title.id}">{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id="{desc.id}">{desc.desc}</desc>
  {/if}
    <path fill="#1eb53a" d="M0 0h500v250H0z"/><path fill="#0099b5" d="M0 0h500v125H0z"/><path fill="#ce1126" d="M0 80h500v90H0z"/><path fill="#fff" d="M0 85h500v80H0z"/><circle cx="70" cy="40" r="30" fill="#fff"/><circle cx="80" cy="40" r="30" fill="#0099b5"/><g fill="#fff" transform="translate(136 64)"><g id="e"><g id="d"><g id="c"><g id="b"><path id="a" d="M0-6v6h3" transform="rotate(18 0 -6)"/><use xlink:href="#a" transform="scale(-1 1)"/></g><use xlink:href="#b" transform="rotate(72)"/></g><use xlink:href="#b" transform="rotate(-72)"/><use xlink:href="#c" transform="rotate(144)"/></g><use xlink:href="#d" y="-24"/><use xlink:href="#d" y="-48"/></g><use xlink:href="#e" x="24"/><use xlink:href="#e" x="48"/><use xlink:href="#d" x="-48"/><use xlink:href="#d" x="-24"/><use xlink:href="#d" x="-24" y="-24"/></g>
</svg>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop title
@prop desc
@prop ariaLabel =  "uz"
@prop ...restProps
-->
