<script lang="ts">
  import { Code, H2, H3 } from 'runes-webkit';
  import { HighlightCompo } from 'svelte-rune-highlight';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Props - Svelte Flags v1</h1>

<H2>Prop</H2>

<HighlightCompo lang="ts" code={modules['./md/props.md'] as string} />

<H2>Size</H2>

<p>
  To change the size of an icon, use the <Code>size</Code> prop and specify the desired size. For example:
</p>

<HighlightCompo lang="ts" code={modules['./md/size.md'] as string} />

<H2>CSS framework</H2>

<p>
  You can apply CSS framework attributes directly to the icon component using the <Code>class</Code>
  prop.
</p>

<H3>Tailwind CSS</H3>

<HighlightCompo lang="ts" code={modules['./md/tailwind-css.md'] as string} />

<H3>Bootstrap</H3>

<HighlightCompo lang="ts" code={modules['./md/bootstrap.md'] as string} />

<H2>A11y</H2>

<p>
  All icons have aria-label. For example <Code>Us</Code> has <Code>aria-label="us"</Code>. Use <Code
    >ariaLabel</Code
  > prop to modify the <Code>aria-label</Code> value.
</p>

<HighlightCompo lang="ts" code={modules['./md/a11y.md'] as string} />

<H2>Events</H2>

<p>All icons have the following <Code>event</Code>s:</p>

<HighlightCompo lang="ts" code={modules['./md/events.md'] as string} />

<HighlightCompo lang="ts" code={modules['./md/events-2.md'] as string} />

<H2>Passing down other attributes</H2>

<p>Since all icons have <Code>...$$restProps</Code>, you can pass other attibutes as well.</p>

<HighlightCompo lang="ts" code={modules['./md/passing-down-other-attributes.md'] as string} />
