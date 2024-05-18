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
    ariaLabel =  "kr" , 
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
    viewBox="-36 -24 72 48"
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
      <path fill="#fff" d="M-36-24h72v48h-72z"/><g transform="rotate(-56.31)"><g id="b"><path id="a" d="M-6-25H6m-12 3H6m-12 3H6" stroke="#000" stroke-width="2"/><use xlink:href="#a" y="44"/></g><path stroke="#fff" d="M0 17v10"/><circle fill="#cd2e3a" r="12"/><path fill="#0047a0" d="M0-12A6 6 0 000 0a6 6 0 010 12 12 12 0 010-24z"/></g><g transform="rotate(-123.69)"><use xlink:href="#b"/><path stroke="#fff" d="M0-23.5v3M0 17v3.5m0 3v3"/></g>
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
    viewBox="-36 -24 72 48"
  >
    {#if title?.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <path fill="#fff" d="M-36-24h72v48h-72z"/><g transform="rotate(-56.31)"><g id="b"><path id="a" d="M-6-25H6m-12 3H6m-12 3H6" stroke="#000" stroke-width="2"/><use xlink:href="#a" y="44"/></g><path stroke="#fff" d="M0 17v10"/><circle fill="#cd2e3a" r="12"/><path fill="#0047a0" d="M0-12A6 6 0 000 0a6 6 0 010 12 12 12 0 010-24z"/></g><g transform="rotate(-123.69)"><use xlink:href="#b"/><path stroke="#fff" d="M0-23.5v3M0 17v3.5m0 3v3"/></g>
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com/)
## Props
@props: 
-->
