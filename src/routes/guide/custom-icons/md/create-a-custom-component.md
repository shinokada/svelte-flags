<script lang="ts">
  import type { ComponentType } from 'svelte';
  const config = {
    size: "40",
  };
  import { Icon } from 'svelte-flags';
  export let icon: ComponentType;
</script>

<Icon {...config} {icon} />