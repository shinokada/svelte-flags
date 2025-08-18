<script>
  import { Us } from 'svelte-flags';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
  };
  onMount(() => {
    const icon = new Us({ target: document.body, props });
  });
</script>
