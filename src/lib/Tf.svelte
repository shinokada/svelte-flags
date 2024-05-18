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
    ariaLabel =  "tf" , 
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
    viewBox="0 0 600 400"
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
      <defs><path id="a" transform="scale(21)" fill="#fff" d="M0-1L.588.809-.952-.309H.952L-.588.809z"/></defs><path fill="#002395" d="M0 0h600v400H0z"/><path fill="#fff" d="M0 0h244v164H0z"/><path fill="#002395" d="M0 0h80v160H0z"/><path fill="#ED2939" d="M160 0h80v160h-80z"/><path fill="#fff" d="M355 183l12.875 20.5H404.5V275L377 232l-37 59h18l19-34 39 70 39-70 19 34h18l-37-59-27.5 43v-39.5H444l12.25-19.5H427.5v-12.5h36.625L477 183H355zm43 87.5h-40v14h40zm76 0h-40v14h40z"/><use xlink:href="#a" x="416" y="362"/><use xlink:href="#a" x="371" y="328"/><use xlink:href="#a" x="461" y="328"/><use xlink:href="#a" x="333" y="227"/><use xlink:href="#a" x="499" y="227"/>
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
    viewBox="0 0 600 400"
  >
    {#if title?.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <defs><path id="a" transform="scale(21)" fill="#fff" d="M0-1L.588.809-.952-.309H.952L-.588.809z"/></defs><path fill="#002395" d="M0 0h600v400H0z"/><path fill="#fff" d="M0 0h244v164H0z"/><path fill="#002395" d="M0 0h80v160H0z"/><path fill="#ED2939" d="M160 0h80v160h-80z"/><path fill="#fff" d="M355 183l12.875 20.5H404.5V275L377 232l-37 59h18l19-34 39 70 39-70 19 34h18l-37-59-27.5 43v-39.5H444l12.25-19.5H427.5v-12.5h36.625L477 183H355zm43 87.5h-40v14h40zm76 0h-40v14h40z"/><use xlink:href="#a" x="416" y="362"/><use xlink:href="#a" x="371" y="328"/><use xlink:href="#a" x="461" y="328"/><use xlink:href="#a" x="333" y="227"/><use xlink:href="#a" x="499" y="227"/>
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com/)
## Props
@props: 
-->
