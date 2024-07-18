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
    ariaLabel = 'ph',
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
  viewBox="0 0 180 90"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path fill="#0038a8" d="M0 0h180v90H0z" /><path fill="#ce1126" d="M0 45h180v45H0z" /><path
    d="M77.942 45L0 90V0"
    fill="#fff"
  /><g transform="translate(28 45)" fill="#fcd116"
    ><circle r="9" /><g id="d"
      ><g id="c"
        ><g id="b"
          ><path d="M-1 0l.062.062L0 0l-.938-.062z" transform="scale(19)" /><path
            id="a"
            d="M-.884.116l.05.05L0 0z"
            transform="scale(19.2381)"
          /><use xlink:href="#a" transform="scale(1 -1)" /></g
        ><use xlink:href="#b" transform="rotate(45)" /></g
      ><use xlink:href="#c" transform="rotate(90)" /></g
    ><use xlink:href="#d" transform="rotate(180)" /><g transform="translate(-2.02)"
      ><g id="f" transform="translate(37.962)"
        ><path id="e" d="M5 0L1.618 1.176l-.073 3.58-2.163-2.854-3.427 1.037L-2 0z" /><use
          xlink:href="#e"
          transform="scale(1 -1)"
        /></g
      ><use xlink:href="#f" transform="rotate(120)" /><use
        xlink:href="#f"
        transform="rotate(-120)"
      /></g
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
@prop ariaLabel = 'ph'
@prop ...restProps
-->
