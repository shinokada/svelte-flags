import type { MetaProps } from 'runes-meta-tags';
const title = 'Setting Global Icon - Svelte Flags'
const description = 'How to create a global icon using setContext with Svelte Flags'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-flags'
export const load = () => {
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