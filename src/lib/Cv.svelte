<script>
  export let size = '24';
  export let role = 'img';
  export let ariaLabel = 'Cv';
</script>

<svg
  width={size}
  height={size}
  {...$$restProps}
  {role}
  aria-label={ariaLabel}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 510 300"
>
  <rect width="510" height="300" fill="#003893" />
  <rect width="510" height="75" y="150" fill="#fff" />
  <rect width="510" height="25" y="175" fill="#cf2027" />
  <g fill="#f7d116" transform="translate(191.25,187.5)">
    <g id="s2">
      <g id="s" transform="translate(0,-75)">
        <g id="c">
          <path id="t" d="M0,-15V0H7.5" transform="rotate(18,0,-15)" />
          <use xlink:href="#t" transform="scale(-1,1)" />
        </g>
        <use xlink:href="#c" transform="rotate(72)" />
        <use xlink:href="#c" transform="rotate(144)" />
        <use xlink:href="#c" transform="rotate(216)" />
        <use xlink:href="#c" transform="rotate(288)" />
      </g>
      <use xlink:href="#s" y="150" />
    </g>
    <use xlink:href="#s2" transform="rotate(72)" />
    <use xlink:href="#s2" transform="rotate(144)" />
    <use xlink:href="#s2" transform="rotate(216)" />
    <use xlink:href="#s2" transform="rotate(288)" />
  </g>
</svg>

<!--
@component
[Go to docs](https://svelte-flags.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let ariaLabel = 'Cv';
-->
