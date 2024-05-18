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
    ariaLabel =  "ge" , 
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
    viewBox="0 0 300 200"
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
      <defs><g id="c"><clipPath id="a"><path d="M-109 104a104 104 0 000-208h218a104 104 0 000 208z"/></clipPath><path id="b" d="M-55 74a55 55 0 01110 0V-74a55 55 0 01-110 0z" clip-path="url(#a)"/><use xlink:href="#b" transform="rotate(90)"/></g></defs><path fill="#fff" d="M0 0h300v200H0z"/><path d="M130 0v80H0v40h130v80h40v-80h130V80H170V0h-40z" fill="red"/><use xlink:href="#c" transform="translate(64.45 39.45)" fill="red"/><use xlink:href="#c" transform="translate(235.55 160.55)" fill="red"/><use xlink:href="#c" transform="translate(235.55 39.45)" fill="red"/><use xlink:href="#c" transform="translate(64.45 160.55)" fill="red"/>
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
    viewBox="0 0 300 200"
  >
    {#if title?.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <defs><g id="c"><clipPath id="a"><path d="M-109 104a104 104 0 000-208h218a104 104 0 000 208z"/></clipPath><path id="b" d="M-55 74a55 55 0 01110 0V-74a55 55 0 01-110 0z" clip-path="url(#a)"/><use xlink:href="#b" transform="rotate(90)"/></g></defs><path fill="#fff" d="M0 0h300v200H0z"/><path d="M130 0v80H0v40h130v80h40v-80h130V80H170V0h-40z" fill="red"/><use xlink:href="#c" transform="translate(64.45 39.45)" fill="red"/><use xlink:href="#c" transform="translate(235.55 160.55)" fill="red"/><use xlink:href="#c" transform="translate(235.55 39.45)" fill="red"/><use xlink:href="#c" transform="translate(64.45 160.55)" fill="red"/>
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com/)
## Props
@props: 
-->
