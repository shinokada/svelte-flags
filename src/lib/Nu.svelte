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
    ariaLabel =  "nu" , 
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
    viewBox="0 0 120 60"
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
      <clipPath id="a"><path d="M0 0v15h70v15H60zm0 30v10h30V0h30z"/></clipPath><path fill="#012169" d="M0 0h120v60H0z"/><g stroke="#c8102e" stroke-width="6"><path d="M0 0l60 30m0-30L0 30" stroke="#fff"/><path d="M0 0l60 30m0-30L0 30" clip-path="url(#a)" stroke-width="4"/><path d="M30 0v40M0 15h70" stroke="#fff" stroke-width="10"/><path d="M30 0v40M0 15h70"/></g><path d="M60 0h60v60H0V30h60z" fill="#fedd00"/><g transform="translate(30 15)"><g transform="scale(5.1039)"><circle r="1" fill="#012169"/><path id="b" d="M0-513674l301930 929245-790463-574305h977066l-790463 574305" fill="#fedd00" transform="scale(0.00000194676)"/></g><use xlink:href="#b" transform="matrix(3 0 0 3 -17.5 .29)"/><use xlink:href="#b" transform="matrix(3 0 0 3 17.5 .29)"/><use xlink:href="#b" transform="matrix(3 0 0 3 0 10.29)"/><use xlink:href="#b" transform="matrix(3 0 0 3 0 -9.71)"/></g>
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
    viewBox="0 0 120 60"
  >
    {#if title?.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <clipPath id="a"><path d="M0 0v15h70v15H60zm0 30v10h30V0h30z"/></clipPath><path fill="#012169" d="M0 0h120v60H0z"/><g stroke="#c8102e" stroke-width="6"><path d="M0 0l60 30m0-30L0 30" stroke="#fff"/><path d="M0 0l60 30m0-30L0 30" clip-path="url(#a)" stroke-width="4"/><path d="M30 0v40M0 15h70" stroke="#fff" stroke-width="10"/><path d="M30 0v40M0 15h70"/></g><path d="M60 0h60v60H0V30h60z" fill="#fedd00"/><g transform="translate(30 15)"><g transform="scale(5.1039)"><circle r="1" fill="#012169"/><path id="b" d="M0-513674l301930 929245-790463-574305h977066l-790463 574305" fill="#fedd00" transform="scale(0.00000194676)"/></g><use xlink:href="#b" transform="matrix(3 0 0 3 -17.5 .29)"/><use xlink:href="#b" transform="matrix(3 0 0 3 17.5 .29)"/><use xlink:href="#b" transform="matrix(3 0 0 3 0 10.29)"/><use xlink:href="#b" transform="matrix(3 0 0 3 0 -9.71)"/></g>
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com/)
## Props
@props: 
-->
