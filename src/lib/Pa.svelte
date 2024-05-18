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
    ariaLabel =  "pa" , 
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
      <path d="M0 0h900v600H0z" fill="#fff"/><path d="M0 300h450v300H0z" fill="#002855"/><path d="M450 0h450v300H450z" fill="#A6192E"/><path d="M675 375l16.84 51.822 54.49.002-44.082 32.03 16.836 51.823L675 478.65l-44.084 32.027 16.836-51.823-44.081-32.03 54.489-.002z" fill="#A6192E" fill-rule="evenodd"/><path d="M225 75l16.84 51.822 54.49.002-44.082 32.03 16.836 51.823L225 178.65l-44.084 32.027 16.836-51.823-44.081-32.03 54.489-.002z" fill="#002855" fill-rule="evenodd"/>
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
      <path d="M0 0h900v600H0z" fill="#fff"/><path d="M0 300h450v300H0z" fill="#002855"/><path d="M450 0h450v300H450z" fill="#A6192E"/><path d="M675 375l16.84 51.822 54.49.002-44.082 32.03 16.836 51.823L675 478.65l-44.084 32.027 16.836-51.823-44.081-32.03 54.489-.002z" fill="#A6192E" fill-rule="evenodd"/><path d="M225 75l16.84 51.822 54.49.002-44.082 32.03 16.836 51.823L225 178.65l-44.084 32.027 16.836-51.823-44.081-32.03 54.489-.002z" fill="#002855" fill-rule="evenodd"/>
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com/)
## Props
@props: 
-->
