<script lang="ts">
  import type { Component } from 'svelte';
  import { IconPage, filterStringKeys } from 'runes-webkit';
  import * as icons from '$lib';

  const keyIcons = filterStringKeys(icons);
</script>

<IconPage
  minSize="24"
  defaultSize="30"
  maxSize="60"
  div3Class="lg:grid-cols-3 md:grid-cols-2 "
  icons={keyIcons as Component}
  threeTabs={false}
  title="Icons - Svelte Flags"
/>
