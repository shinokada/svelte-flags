import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Setting Global Icon - Svelte Flags',
    description: 'Setting Global Icon using setContext with Svelte Flags',
    og: {
      title: 'Setting Global Icon - Svelte Flags',
      description: 'Setting Global Icon using setContext with Svelte Flags'
    },
    twitter: {
      title: 'Setting Global Icon - Svelte Flags',
      description: 'Setting Global Icon using setContext with Svelte Flags'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
