<script>
  import { setContext } from 'svelte';
  import { MapLocationOutline } from 'svelte-flags';
  const iconCtx = {
    size: 'xl'
  };
  setContext('iconCtx', iconCtx);
</script>

<MapLocationOutline color="#ff4488" />
