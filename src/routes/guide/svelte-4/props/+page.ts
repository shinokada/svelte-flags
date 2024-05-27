import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Props - Svelte Flags v1',
    description: 'How to use props with Svelte Flags v1',
    og: {
      title: 'Props - Svelte Flags v1',
      description: 'How to use props with Svelte Flags v1'
    },
    twitter: {
      title: 'Props - Svelte Flags v1',
      description: 'How to use props with Svelte Flags v1'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
