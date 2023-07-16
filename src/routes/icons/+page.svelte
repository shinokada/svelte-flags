<script>
  import Label from 'flowbite-svelte/Label.svelte';
  import Range from 'flowbite-svelte/Range.svelte';
  import TableSearch from 'flowbite-svelte/TableSearch.svelte';
  import * as Icons from '$lib';

  const contentClass = ' rounded-lg dark:bg-stone-900 mt-4';
  let searchTerm = '';

  $: filteredEntries = Object.entries(Icons).filter(([name, component]) => {
    return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  });
  let size="24"
</script>

<TableSearch
  placeholder="Search by icon name"
  hoverable={true}
  bind:inputValue={searchTerm}
  divClass='relative overflow-x-auto'
>
<div class="xl:w-1/3 lg:w-2/5 md:w-1/2 sm:w-3/4 w-full p-4">
  <Label class="text-lg py-4 ">Icon size: {size}</Label>
  <Range id="range1" min="16" max="50" bind:value={size} />
</div>
<div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white">
  {#each filteredEntries as [name, component]}
    <div class="flex gap-4 items-center text-lg">
      <svelte:component this={component} class="shrink-0" bind:size={size}/>
      {name}
    </div>
  {/each}
</div>
</TableSearch>
