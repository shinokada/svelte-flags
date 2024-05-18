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
    ariaLabel =  "kn" , 
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
    viewBox="0 0 750 500"
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
      <defs><clipPath id="a"><path fill="none" d="M0 0h750v500H0z"/></clipPath></defs><g clip-path="url(#a)"><path d="M750 0H0v500" fill="#009e49"/><path d="M0 500h750V0" fill="#ce1126"/><path d="M0 500L750 0" stroke="#fcd116" stroke-width="210"/><path d="M0 500L750 0" stroke="#000" stroke-width="150"/><g id="d" transform="rotate(-33.69 514.716 -777.095)" fill="#fff"><g id="c"><path id="b" d="M0-70V0h35" transform="rotate(18 0 -70)"/><use xlink:href="#b" transform="scale(-1 1)"/></g><use xlink:href="#c" transform="rotate(72)"/><use xlink:href="#c" transform="rotate(144)"/><use xlink:href="#c" transform="rotate(216)"/><use xlink:href="#c" transform="rotate(288)"/></g><use xlink:href="#d" transform="translate(-285 190)"/></g>
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
    viewBox="0 0 750 500"
  >
    {#if title?.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <defs><clipPath id="a"><path fill="none" d="M0 0h750v500H0z"/></clipPath></defs><g clip-path="url(#a)"><path d="M750 0H0v500" fill="#009e49"/><path d="M0 500h750V0" fill="#ce1126"/><path d="M0 500L750 0" stroke="#fcd116" stroke-width="210"/><path d="M0 500L750 0" stroke="#000" stroke-width="150"/><g id="d" transform="rotate(-33.69 514.716 -777.095)" fill="#fff"><g id="c"><path id="b" d="M0-70V0h35" transform="rotate(18 0 -70)"/><use xlink:href="#b" transform="scale(-1 1)"/></g><use xlink:href="#c" transform="rotate(72)"/><use xlink:href="#c" transform="rotate(144)"/><use xlink:href="#c" transform="rotate(216)"/><use xlink:href="#c" transform="rotate(288)"/></g><use xlink:href="#d" transform="translate(-285 190)"/></g>
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com/)
## Props
@props: 
-->
