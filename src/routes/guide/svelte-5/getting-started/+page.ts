import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Svelte 5 Runes Getting started - Svelte Flags',
    description: 'Getting started with Svelte 5 Runes',
    og: {
      title: 'Svelte 5 Runes Getting started - Svelte Flags',
      description: 'Getting started with Svelte 5 Runes',
    },
    twitter: {
      title: 'Svelte 5 Runes Getting started - Svelte Flags',
      description: 'Getting started with Svelte 5 Runes',
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
