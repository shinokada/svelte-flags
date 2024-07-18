<script lang="ts">
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
  interface Props extends BaseProps {
    title?: TitleType;
    desc?: DescType;
    ariaLabel?: string;
  }

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    title,
    desc,
    ariaLabel = 'sb',
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
  viewBox="0 0 800 400"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <defs><clipPath id="a"><path d="M0 0h800v400H0z" /></clipPath></defs><g clip-path="url(#a)"
    ><path d="M0 400V0h800z" fill="#0051ba" /><path d="M0 400h800V0z" fill="#215b33" /><path
      d="M0 400L800 0"
      stroke="#fcd116"
      stroke-width="36"
    /><g transform="translate(140 120)"
      ><g id="e" fill="#fff"
        ><g id="d"
          ><g id="c"
            ><path id="b" d="M0-40V0h20z" transform="rotate(18 0 -40)" /><use
              xlink:href="#b"
              transform="scale(-1 1)"
            /></g
          ><use xlink:href="#c" transform="rotate(72)" /></g
        ><use xlink:href="#c" transform="rotate(-72)" /><use
          xlink:href="#d"
          transform="rotate(144)"
        /></g
      ><g id="g" transform="rotate(40.6)"
        ><use id="f" xlink:href="#e" x="-104" transform="rotate(-40.6 -104 0)" /><use
          xlink:href="#f"
          x="208"
        /></g
      ><use xlink:href="#g" transform="scale(-1 1)" /></g
    ></g
  >
</svg>

<!--
@component
[Go to docs](https://svelte-flags.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop title
@prop desc
@prop ariaLabel = 'sb'
@prop ...restProps
-->
