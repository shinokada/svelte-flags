import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Custom icons example - Svelte Flags',
    description: 'How to create a custom icons with Svelte Flags',
    og: {
      title: 'Custom icons example - Svelte Flags',
      description: 'How to create a custom icons with Svelte Flags'
    },
    twitter: {
      title: 'Custom icons example - Svelte Flags',
      description: 'How to create a custom icons with Svelte Flags'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
