import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Getting Started: Svelte Flags v2 ',
    description: 'Getting Started with Svelte Flags v2',
    og: {
      title: 'Getting Started: Svelte Flags v2',
      description: 'Getting Started with Svelte Flags v2'
    },
    twitter: {
      title: 'Getting Started: Svelte Flags v2',
      description: 'Getting Started with Svelte Flags v2'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
