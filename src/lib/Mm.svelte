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
    ariaLabel =  "mm" , 
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
    viewBox="0 0 18 12"
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
       <rect width="18" height="6" fill="#FECB00"/> <rect width="18" height="6" y="6" fill="#EA2839"/> <rect width="18" height="4" y="4" fill="#34B233"/> <g transform="translate(9,6.422)scale(4.422)"> <polygon id="pt" points="-0.3249196962329062,0 0,-1 0.3249196962329062,0" fill="#FFF"/> <use xlink:href="#pt" transform="rotate(-144)"/> <use xlink:href="#pt" transform="rotate(-72)"/> <use xlink:href="#pt" transform="rotate(72)"/> <use xlink:href="#pt" transform="rotate(144)"/> </g>  
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
    viewBox="0 0 18 12"
  >
    {#if title?.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
       <rect width="18" height="6" fill="#FECB00"/> <rect width="18" height="6" y="6" fill="#EA2839"/> <rect width="18" height="4" y="4" fill="#34B233"/> <g transform="translate(9,6.422)scale(4.422)"> <polygon id="pt" points="-0.3249196962329062,0 0,-1 0.3249196962329062,0" fill="#FFF"/> <use xlink:href="#pt" transform="rotate(-144)"/> <use xlink:href="#pt" transform="rotate(-72)"/> <use xlink:href="#pt" transform="rotate(72)"/> <use xlink:href="#pt" transform="rotate(144)"/> </g>  
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com/)
## Props
@props: 
-->
