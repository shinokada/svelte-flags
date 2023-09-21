<script>
  import { setContext } from 'svelte';
  import { Us, Jp } from '$lib';
  const iconCtx = {
    size: '200', // Icon size in pixels
    role: 'svg icon image'
  };
  setContext('iconCtx', iconCtx);
</script>

<Us />
<Jp />
