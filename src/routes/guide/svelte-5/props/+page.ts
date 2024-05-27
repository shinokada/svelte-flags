import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Props - Svelte Flags v2',
    description: 'How to use props with Svelte Flags v2',
    og: {
      title: 'Props - Svelte Flags v2',
      description: 'How to use props with Svelte Flags v2'
    },
    twitter: {
      title: 'Props - Svelte Flags v2',
      description: 'How to use props with Svelte Flags v2'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
