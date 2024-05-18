import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'No tabs example - Runes Webkit',
    description: 'No tabs example',
    og: {
      title: 'No tabs example - Runes Webkit',
      description: 'No tabs example',
    },
    twitter: {
      title: 'No tabs example - Runes Webkit',
      description: 'No tabs example',
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
