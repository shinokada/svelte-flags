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
    ariaLabel =  "nr" , 
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
    viewBox="0 0 600 300"
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
      <path fill="#002b7f" d="M0 0h600v300H0z"/><path fill="#ffc61e" d="M0 137.5h600v25H0z"/><path fill="#fff" d="M150 262.5l-6.47-25.852L125 255.801l7.322-25.623L106.7 237.5l19.153-18.53L100 212.5l25.852-6.47-19.153-18.53 25.623 7.322L125 169.2l18.53 19.153L150 162.5l6.47 25.852L175 169.199l-7.322 25.623L193.3 187.5l-19.153 18.53L200 212.5l-25.852 6.47 19.153 18.53-25.623-7.322L175 255.8l-18.53-19.153L150 262.5z"/>
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
    viewBox="0 0 600 300"
  >
    {#if title?.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <path fill="#002b7f" d="M0 0h600v300H0z"/><path fill="#ffc61e" d="M0 137.5h600v25H0z"/><path fill="#fff" d="M150 262.5l-6.47-25.852L125 255.801l7.322-25.623L106.7 237.5l19.153-18.53L100 212.5l25.852-6.47-19.153-18.53 25.623 7.322L125 169.2l18.53 19.153L150 162.5l6.47 25.852L175 169.199l-7.322 25.623L193.3 187.5l-19.153 18.53L200 212.5l-25.852 6.47 19.153 18.53-25.623-7.322L175 255.8l-18.53-19.153L150 262.5z"/>
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com/)
## Props
@props: 
-->
