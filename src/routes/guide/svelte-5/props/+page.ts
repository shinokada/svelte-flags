import type { MetaProps } from 'runes-meta-tags';
const title = 'Props - Svelte Flags v2';
const description = 'How to use Svelte Flags v2 props';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-flags';

export const load = () => {
  const pageMetaTags: MetaProps = {
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
  };
  return { pageMetaTags };
};
