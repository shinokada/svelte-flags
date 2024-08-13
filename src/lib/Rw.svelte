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
    ariaLabel =  "rw" , 
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
  viewBox="0 0 1080 720"
>
  {#if title?.id && title.title}
    <title id="{title.id}">{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id="{desc.id}">{desc.desc}</desc>
  {/if}
     <rect width="1080" height="720" fill="#20603D"/> <rect width="1080" height="540" fill="#FAD201"/> <rect width="1080" height="360" fill="#00A1DE"/> <g transform="translate(886.5,188.1)"> <g id="h"> <path id="q" fill="#E5BE01" d="M 116.10000,0.00000 L 35.69202,4.69894 112.14399,30.04889 33.25966,13.77660 100.54555,58.05000 28.56072,21.91541 82.09510,82.09510 21.91541,28.56072 58.05000,100.54555 13.77660,33.25966 30.04889,112.14399 4.69894,35.69202 0.00000,116.10000 -1,-1 z"/> <use xlink:href="#q" transform="scale(1,-1)"/> </g> <use xlink:href="#h" transform="scale(-1,1)"/> <circle r="34.3" fill="#E5BE01" stroke="#00A1DE" stroke-width="3.4"/> </g>  
</svg>

