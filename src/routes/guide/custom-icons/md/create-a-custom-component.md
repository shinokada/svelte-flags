<script lang="ts">
  import type { Component } from 'svelte';
  const config = {
    size: "40",
  };
  import { Icon } from 'svelte-flags';
  export let Icon: Component;
</script>

<Icon {...config} {icon} />