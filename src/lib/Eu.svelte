<script lang='ts'>
  import { getContext } from 'svelte';
  import type { SVGAttributes } from 'svelte/elements';

  type TitleType = {
    id?: string;
    title?: string;
  };
  type DescType = {
    id?: string;
    desc?: string;
  };
  interface BaseProps extends SVGAttributes<SVGElement> {
    size?: string;
    role?: string;
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
    title, 
    desc, 
    ariaLabel =  "eu" , 
    ...restProps 
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  aria-label={ariaLabel}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 810 540"
>
  {#if title?.id && title.title}
    <title id="{title.id}">{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id="{desc.id}">{desc.desc}</desc>
  {/if}
    <defs><g id="d"><g id="b"><path id="a" d="M0 0v1h.5z" transform="rotate(18 3.157 -.5)"/><use xlink:href="#a" transform="scale(-1 1)"/></g><g id="c"><use xlink:href="#b" transform="rotate(72)"/><use xlink:href="#b" transform="rotate(144)"/></g><use xlink:href="#c" transform="scale(-1 1)"/></g></defs><path fill="#039" d="M0 0h810v540H0z"/><g fill="#fc0" transform="matrix(30 0 0 30 405 270)"><use xlink:href="#d" y="-6"/><use xlink:href="#d" y="6"/><g id="e"><use xlink:href="#d" x="-6"/><use xlink:href="#d" transform="rotate(-144 -2.344 -2.11)"/><use xlink:href="#d" transform="rotate(144 -2.11 -2.344)"/><use xlink:href="#d" transform="rotate(72 -4.663 -2.076)"/><use xlink:href="#d" transform="rotate(72 -5.076 .534)"/></g><use xlink:href="#e" transform="scale(-1 1)"/></g>
</svg>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop title
@prop desc
@prop ariaLabel =  "eu"
@prop ...restProps
-->
