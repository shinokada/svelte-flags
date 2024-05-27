import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Icons: Svelte Flags',
    description: 'Svelte Flags icons and icon names you can copy',
    og: {
      title: 'Icons: Svelte Flags',
      description: 'Svelte Flags icons and icon names you can copy',
    },
    twitter: {
      title: 'Icons: Svelte Flags',
      description: 'Svelte Flags icons and icon names you can copy',
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
