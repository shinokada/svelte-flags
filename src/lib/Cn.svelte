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
    ariaLabel =  "cn" , 
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
    viewBox="0 0 30 20"
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
      <defs><path id="a" d="M0-1L.588.809-.952-.309H.952L-.588.809z" fill="#FF0"/></defs><path fill="#EE1C25" d="M0 0h30v20H0z"/><use xlink:href="#a" transform="matrix(3 0 0 3 5 5)"/><use xlink:href="#a" transform="rotate(23.036 .093 25.536)"/><use xlink:href="#a" transform="rotate(45.87 1.273 16.18)"/><use xlink:href="#a" transform="rotate(69.945 .996 12.078)"/><use xlink:href="#a" transform="rotate(20.66 -19.689 31.932)"/>
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
    viewBox="0 0 30 20"
  >
    {#if title?.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <defs><path id="a" d="M0-1L.588.809-.952-.309H.952L-.588.809z" fill="#FF0"/></defs><path fill="#EE1C25" d="M0 0h30v20H0z"/><use xlink:href="#a" transform="matrix(3 0 0 3 5 5)"/><use xlink:href="#a" transform="rotate(23.036 .093 25.536)"/><use xlink:href="#a" transform="rotate(45.87 1.273 16.18)"/><use xlink:href="#a" transform="rotate(69.945 .996 12.078)"/><use xlink:href="#a" transform="rotate(20.66 -19.689 31.932)"/>
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com/)
## Props
@props: 
-->
