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
    ariaLabel =  "ve" , 
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
    viewBox="0 0 180 120"
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
      <defs><g id="d" transform="translate(0 -36)"><g id="c"><g id="b"><path d="M0-5v5h3z" fill="#fff" transform="rotate(18 0 -5)" id="a"/><use xlink:href="#a" transform="scale(-1 1)"/></g><use xlink:href="#b" transform="rotate(72)"/></g><use xlink:href="#b" transform="rotate(-72)"/><use xlink:href="#c" transform="rotate(144)"/></g></defs><path d="M0 0h180v120H0z" fill="#cf142b"/><path d="M0 0h180v80H0z" fill="#00247d"/><path d="M0 0h180v40H0z" fill="#fc0"/><g transform="translate(90 84)"><g id="f"><g id="e"><use xlink:href="#d" transform="rotate(10)"/><use xlink:href="#d" transform="rotate(30)"/></g><use xlink:href="#e" transform="rotate(40)"/></g><use xlink:href="#f" transform="rotate(-80)"/></g>
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
    viewBox="0 0 180 120"
  >
    {#if title?.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc?.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
      <defs><g id="d" transform="translate(0 -36)"><g id="c"><g id="b"><path d="M0-5v5h3z" fill="#fff" transform="rotate(18 0 -5)" id="a"/><use xlink:href="#a" transform="scale(-1 1)"/></g><use xlink:href="#b" transform="rotate(72)"/></g><use xlink:href="#b" transform="rotate(-72)"/><use xlink:href="#c" transform="rotate(144)"/></g></defs><path d="M0 0h180v120H0z" fill="#cf142b"/><path d="M0 0h180v80H0z" fill="#00247d"/><path d="M0 0h180v40H0z" fill="#fc0"/><g transform="translate(90 84)"><g id="f"><g id="e"><use xlink:href="#d" transform="rotate(10)"/><use xlink:href="#d" transform="rotate(30)"/></g><use xlink:href="#e" transform="rotate(40)"/></g><use xlink:href="#f" transform="rotate(-80)"/></g>
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com/)
## Props
@props: 
-->
