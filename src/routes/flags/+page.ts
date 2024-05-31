import type { MetaProps } from 'runes-meta-tags';
const title = 'Icons - Svelte Flags'
const description = 'Svelte Flags icons and icon names you can copy'

export const load = () => {
  const pageMetaTags = Object.freeze({
    title,
    description,
    og: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
