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
    ariaLabel =  "eh" , 
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
  viewBox="0 0 600 300"
>
  {#if title?.id && title.title}
    <title id="{title.id}">{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id="{desc.id}">{desc.desc}</desc>
  {/if}
     <rect width="600" height="150" fill="#000"/> <rect y="150" width="600" height="150" fill="#007a3d"/> <rect y="100" width="600" height="100" fill="#fff"/> <path d="M 0,0 200,150 0,300 z" fill="#c4111b"/> <circle cx="300" cy="150" r="40" fill="#c4111b"/> <circle cx="315" cy="150" r="40" fill="#fff"/> <path d="m 289.26294,174.2204 17.05633,-12.19273 16.92296,12.37709 -6.32527,-19.98928 17.00081,-12.26999 -20.96556,-0.16131 -6.41591,-19.96036 -6.63215,19.88957 -20.96606,-0.0661 16.86669,12.45373 -6.54184,19.91946 z" fill="#c4111b"/>  
</svg>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop title
@prop desc
@prop ariaLabel =  "eh"
@prop ...restProps
-->
