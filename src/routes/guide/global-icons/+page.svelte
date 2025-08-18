<script lang="ts">
  import { HighlightCompo, Code, H2 } from 'runes-webkit';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Setting Global Icon - Svelte Flags</h1>

<p>
  You can create global icon preferences in your Svelte application using <Code>setContext</Code>.
  This allows you to configure icon-related properties once and share them across multiple
  components.
</p>

<H2>Setting preferences</H2>

<p>
  In your <Code>+layout.svelte</Code> or <Code>+page.svelte</Code>, you can define and set global
  icon preferences as follows:
</p>

<HighlightCompo
  codeLang="ts"
  code={modules['./md/setting-preferences.md'] as string}
  clipboardClass="top-2"
/>

<p>
  All the <Code>props</Code> are optional, allowing you to fine-tune the appearance and accessibility
  of your icons as needed.
</p>

<p>
  Remember that you can set one or more properties, allowing you to tailor icon settings to your
  specific design and accessibility requirements.
</p>

<p>Check the props section for Svelte 4 and 5: Runes for each <Code>props</Code>.</p>
