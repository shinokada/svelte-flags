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
    ariaLabel =  "sn" , 
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
    viewBox="0 0 900 600"
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
      <path fill="#00853f" d="M0 0h300v600H0z"/><path fill="#fdef42" d="M300 0h300v600H300z"/><path fill="#e31b23" d="M600 0h300v600H600z"/><g transform="translate(450 300)" fill="#00853f"><g id="b"><path id="a" d="M0-100V0h50z" transform="rotate(18 0 -100)"/><use xlink:href="#a" transform="scale(-1 1)"/></g><use xlink:href="#b" transform="rotate(72)"/><use xlink:href="#b" transform="rotate(144)"/><use xlink:href="#b" transform="rotate(216)"/><use xlink:href="#b" transform="rotate(288)"/></g>
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
    viewBox="0 0 900 600"
  >
    {#if title?.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <path fill="#00853f" d="M0 0h300v600H0z"/><path fill="#fdef42" d="M300 0h300v600H300z"/><path fill="#e31b23" d="M600 0h300v600H600z"/><g transform="translate(450 300)" fill="#00853f"><g id="b"><path id="a" d="M0-100V0h50z" transform="rotate(18 0 -100)"/><use xlink:href="#a" transform="scale(-1 1)"/></g><use xlink:href="#b" transform="rotate(72)"/><use xlink:href="#b" transform="rotate(144)"/><use xlink:href="#b" transform="rotate(216)"/><use xlink:href="#b" transform="rotate(288)"/></g>
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com/)
## Props
@props: 
-->
