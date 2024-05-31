import type { MetaProps } from 'runes-meta-tags';

const title = 'Getting Started - Svelte Flags v1'
const description = 'How to get started with Svelte Flags v1'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-flags'

export const load = ({ url }) => {
  const pageMetaTags = Object.freeze({
    title,
    description,
    og: {
      title,
      description,
      image: imgUrl
    },
    twitter: {
      title,
      description,
      image: imgUrl
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
