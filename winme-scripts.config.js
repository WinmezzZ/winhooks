const { defineConfig } = require('@winme/webpack-scripts');
const path = require('path');

module.exports = defineConfig({
  modifyVars: {
    '@primary-color': '#13c2c2',
  },
  webpack: async config => {
    const remarkGfm = await import('remark-gfm');
    const slug = await import('rehype-slug');
    const headings = await import('rehype-autolink-headings');

    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: '@mdx-js/loader',
          /** @type {import('@mdx-js/loader').Options} */
          options: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [slug, headings],
          },
        },
      ],
    });

    config.resolve.alias = {
      '@winme/react-hooks': path.resolve(__dirname, 'lib/index'),
      '@lib': path.resolve(__dirname, 'lib'),
      '@': path.resolve(__dirname, 'src'),
    };

    return config;
  },
});
