import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        publishedDate: fields.datetime({
          label: 'Published Date',
          defaultValue: { kind: 'now' },
          validation: { isRequired: true }
        }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});
