<script lang='ts'>
  import { getContext } from 'svelte';
  type TitleType = {
    id?: string;
    title?: string;
  };
  type DescType = {
    id?: string;
    desc?: string;
  };
  interface BaseProps {
    size?: string;
    role?: string;
    withEvents?: boolean;
    onclick?: (event: MouseEvent) => void;
    onkeydown?: (event: KeyboardEvent) => void;
    onkeyup?: (event: KeyboardEvent) => void;
    class?: string;
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
    withEvents = ctx.withEvents || false, 
    title, 
    desc, 
    class: classname, 
    ariaLabel =  "cm" , 
    onclick, 
    onkeydown, 
    onkeyup,
    ...restProps 
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

{#if withEvents}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    {role}
    width={size}
    height={size}
    class={classname}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 90 60"
    onclick={onclick}
    onkeydown={onkeydown}
    onkeyup={onkeyup}
  >
    {#if title?.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
       <rect width="30" height="60" fill="#007a5e"/> <rect x="30" width="30" height="60" fill="#ce1126"/> <rect x="60" width="30" height="60" fill="#fcd116"/> <g transform="translate(45,30)" fill="#fcd116"> <g id="c"> <path id="t" d="M 0,-8 v 8 h 4 z" transform="rotate(18 0,-8)"/> <use xlink:href="#t" transform="scale(-1,1)"/> </g> <use xlink:href="#c" transform="rotate(72)"/> <use xlink:href="#c" transform="rotate(144)"/> <use xlink:href="#c" transform="rotate(216)"/> <use xlink:href="#c" transform="rotate(288)"/> </g>  
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    {role}
    width={size}
    height={size}
    class={classname}
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 90 60"
  >
    {#if title?.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
       <rect width="30" height="60" fill="#007a5e"/> <rect x="30" width="30" height="60" fill="#ce1126"/> <rect x="60" width="30" height="60" fill="#fcd116"/> <g transform="translate(45,30)" fill="#fcd116"> <g id="c"> <path id="t" d="M 0,-8 v 8 h 4 z" transform="rotate(18 0,-8)"/> <use xlink:href="#t" transform="scale(-1,1)"/> </g> <use xlink:href="#c" transform="rotate(72)"/> <use xlink:href="#c" transform="rotate(144)"/> <use xlink:href="#c" transform="rotate(216)"/> <use xlink:href="#c" transform="rotate(288)"/> </g>  
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com/)
## Props
@props: 
-->
